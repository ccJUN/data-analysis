const ws = require('ws')
const events = require('events')
const request = require('request-promise')
const timeout = 30000
const r = request.defaults({ json: true, gzip: true, timeout: timeout })
var xmlreader = require("xmlreader");
const yyGiftList = require('./yyGiftList')

class Danmu extends events {
    constructor(opt) {
        super()
        if (typeof opt === 'string')
        {
            this._roomId = opt
        }
        else if (typeof opt === 'object'){
            this.livingInfo = opt;
            this._roomId = opt.roomId;
        }
    }


    async start() {
        if (this._starting) return
        this._connect_count = 0
        this._starting = true
        this._start_ws_chat()
    }

    // 开始通信
    _start_ws_chat() {
        this._client_chat = new ws('wss://web-ws.immomo.com/socket.io/?EIO=3&transport=websocket&sid=gOtD01zrbBPuIGSSA3g5', {
            perMessageDeflate: false,
            rejectUnauthorized: false,
        })
        this._client_chat.on('error', err => {
            this.emit('error', err)
        })
        this._client_chat.on('open', this._on_connect.bind(this))
        this._client_chat.on('close', this._stop.bind(this))
        this._client_chat.on('message', this._on_msg.bind(this))
    }

    async _on_connect(obj) {
        var self = this;
        this.emit('connect')
        this._send(42["lconfig","{\"cId\":\"83173364346740\",\"skey\":\"SVNygu50I245a2cYsiumC8TTFlNz1n_N\",\"liveInfo\":{\"liveId\":\"1460988837138\",\"showId\":\"1557760913014562\",\"starId\":\"34273253\"},\"data\":{\"rank\":true}}"]);
        // this._send(JSON.stringify({"uri":"1","top_sid":this._roomId,"sub_sid":this._roomId,"svc_link":""}));
        // this._send(JSON.stringify({"uri":"6", "ts":(new Date()).getTime(), "svc_link":""}));
        this._keep_alive();
    }

    _send(msg){
        if(this._client_chat && this._client_chat.readyState == this._client_chat.OPEN) {
            this._client_chat.send(msg);
        }else{
            clearInterval(this._client_chat_interval);
        }
    }

    _keep_alive(){
        // keep alive
        var self = this;
        this._client_chat_interval = setInterval(function () {
            self._send(JSON.stringify({"uri":"6", "ts":(new Date()).getTime(), "svc_link":""}));
        }, 15000)
    }

    _on_msg(msg) {
        try{
            // 如果可以解析，就用json字符串传递，不行，直接传递
            //this.emit('message', JSON.parse(msg))
            const msg_obj = JSON.parse(msg)
            console.log('======================================')
            console.log('======================================')
            console.log(msg_obj)
            console.log('======================================')
            console.log('======================================')
            if (msg_obj.response == 'user_count' || msg_obj.response == 'keepalive')
            {
                return
            }
            if (msg_obj.response == 'gift_broadcast' )
            {
                msg_obj.time = new Date().getTime() + ''
                msg_obj.uid = msg_obj.gifts[0]["from_uid"];
                msg_obj.uName = msg_obj.gifts[0]["from_name"];
                msg_obj.giftId = msg_obj.gifts[0]["gift_type"];
                msg_obj.giftNum = msg_obj.gifts[0]["gift_num"];
                for(let i=0; i<yyGiftList.length; i++){
                    if(msg_obj.gifts[0]["gift_type"] == yyGiftList[i].type){
                        msg_obj.giftName = yyGiftList[i].name;
                        msg_obj.cost = msg_obj.giftNum * yyGiftList[i].price;
                        break;
                    }else{
                        msg_obj.giftName = '未知';
                        msg_obj.cost = ''
                    }
                }
                this.emit('message', msg_obj)
                return
            }
            if (msg_obj.response == 'combo_bc')
            {
                msg_obj.time = new Date().getTime() + ''
                msg_obj.uName = msg_obj.from_nick;
                msg_obj.giftId = msg_obj.type;
                msg_obj.giftNum = msg_obj.num;
                for(let i=0; i<yyGiftList.length; i++){
                    if(msg_obj.gifts[0]["gift_type"] == yyGiftList[i].type){
                        msg_obj.giftName = yyGiftList[i].name;
                        msg_obj.cost = msg_obj.giftNum * yyGiftList[i].price;
                        break;
                    }else{
                        msg_obj.giftName = '未知';
                        msg_obj.cost = ''
                    }
                }
                this.emit('message', msg_obj)
                return
            }
            if (msg_obj.response == 'chat')
            {
                msg_obj.time = new Date().getTime() + ''
                msg_obj.uid = msg_obj.uid + ''
                this.emit('message', msg_obj)
                return
            }
            if (msg_obj.response == 'entrance_bc')
            {
                msg_obj.time = new Date().getTime() + ''
                this.emit('message', msg_obj)
                return
            }
            return
        }catch(e){
            console.log('parse json fail,msg:',msg)
        }
    }

    async _stop(e) {
        console.log("stop")
        console.log("//////////////////////////////")
        console.log(e)
        console.log("//////////////////////////////")
        if (!this._starting) return
        this._starting = false
        clearInterval(this._fresh_gift_info_timer)
        this._client_chat && this._client_chat.terminate()
        this._client_other && this._client_other.terminate()
        this.emit('close')
    }

    stop() {
        this.removeAllListeners()
        this._stop()
    }

}

module.exports = Danmu
