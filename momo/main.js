/*全局变量*/
var http=require('http')
var yychatnum = 0;
var yygiftnum = 0;
var yyuenterNum = 0;
var domain = require('domain')
var d = domain.create()
// const dcReport = require('./bin/dcReport')

/*主函数*/
function main()
{
    var arguments = process.argv.splice(2);
    const roomid = arguments[0]
    console.log('所传递的参数是：', arguments,roomid);

    if (roomid == null)
    {
        console.log("please input roomid, eg:node main.js huya 199918")
        process.exit(1);
    }

    const danmu = require(__dirname + '/yy')
    const client = new danmu(roomid)

    
    client.on('connect', () => {
            console.log('已连接' + arguments[0] + '房间弹幕~')
            })

    client.on('message', msg => {
        d.on('error', function(err){
            console.log("domain 处理这个错误 main ("+err.message+")");
         });
        try{
            if(msg.response == 'chat'){
                yychatnum++;
                var regular = /<txt data="([\s\S]+?)" \/>/g;
                var tempR = regular.exec(msg["chat_msg"]);
                if(tempR){
                    chatData = tempR[1]
                }else{
                    chatData = msg["chat_msg"];
                }
                chatParameter = `plat_id=88*+*send_ts=${msg.time}*+*roomid=${roomid}*+*user_id=${msg.uid}*+*user_name=${msg.nick}*+*content=${chatData}`;
                d.run(function(){
                    process.nextTick(function(){
                        // dcReport('dc04031', chatParameter)
                    })
                });
            }else if(msg.response == 'entrance_bc'){
                yyuenterNum++;
                uenterParameter = `plat_id=88*+*enter_ts=${msg.time}*+*roomid=${roomid}*+*user_id=${msg.msg.list[0].uid}*+*user_name=${msg.msg.list[0].nick}`;
                d.run(function(){
                    process.nextTick(function(){
                        // dcReport('dc04033', uenterParameter)
                    })
                });
            }else if(msg.response == 'gift_broadcast' || msg.response == 'free_gifts_bc'){
                yygiftnum++;
                giftParameter = `plat_id=88*+*send_ts=${msg.time}*+*roomid=${roomid}*+*user_id=${msg.uid}*+*user_name=${msg.uName}*+*gift_id=${msg.giftId}*+*gift_name=${msg.giftName}*+*gift_num=${msg.giftNum}*+*cost=${msg.cost}`;
                d.run(function(){
                    process.nextTick(function(){
                        // dcReport('dc04032', giftParameter)
                    })
                });
            }

            // console.log("****************")
            // console.log("yychatnum:"+yychatnum)
            // console.log("yygiftnum:"+yygiftnum)
            // console.log("yyuenterNum:"+yyuenterNum)
            // console.log("****************")
        }catch(e){
            console.log('main error:',e)
        }
    })

    client.on('error', e => {
            // console.log("*********************")
            // console.log(e)
            // console.log("*********************")
            })

    client.on('close', () => {
            // console.log('close')
            })

    client.start()
}

main()

