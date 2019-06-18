# -*- coding: UTF-8 -*-
import websocket
import thread
import time
import pprint
import sys
import requests
import time
import json

reload(sys)
sys.setdefaultencoding('utf-8')

def on_message(ws, message):
    roomid = sys.argv[1]
    maintype='派对'
    message = json.loads(message)
    content1 = 0
    # 进入直播间
    try:
        print('message',message['ms'][0]['c'])
        giftbool = message['ms'][0].has_key('gift')
    except:
        pass
    try:
        content1 = message['ms'][0]['c'].index('进入')
    except:
        pass
    if content1 > -1:
        userid = message['userid']
        username =  message['ms'][0]['u']['nic']
        print('用户进入直播间:')
        print(userid,username)
    elif message['ms'][0].has_key('gift'):
        gift = message['ms'][0]
        giftid = gift['seq']
        giftname = gift['gift_id']
        gift_num = gift['gift_name']
        userid = message['userid']
        username = message['ms'][0]['from']['nic']
        print('用户送礼:')
        print(userid,username,gift_num,giftname,giftid)
    else:
        userid = message['userid']
        content = message['ms'][0]['c']
        print('用户弹幕:')
        print(userid,content)


def on_error(ws, error):
    print(error)

def on_close(ws):
    print("### closed ###")

def on_open(ws):
    pass
    # def run(*args):
    #     # for i in range(3):
    #     #     time.sleep(1)
    #     #     ws.send("Hello %d" % i)
    #     ws.send('{"cmd":"login","number":100,"codes":["CJRL","KUAIXUN"]}')
    #     print('yoyoyo')
    #     time.sleep(5)
    #     ws.close()
    #     print("thread terminating...")
    # thread.start_new_thread(run, ())

headers={
    'Accept-Encoding':'gzip, deflate',
    'Accept-Language':'zh-CN,zh;q=0.8',
    'Cache-Control':'no-cache',
    'Host':'chatroom.inke.cn',
    'Origin':'https://mlive2.inke.cn',
    'Pragma':'no-cache',
    'Sec-WebSocket-Extensions':'permessage-deflate; client_max_window_bits',
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36'
}

header = {
    'Host':'webapi.busi.inke.cn',
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36'
}

def getkey():
    # 房间号
    roomid = sys.argv[1]
    userid = sys.argv[2]
    # 用户ID
    print('第一步',roomid,userid)
    getTokenUrl = 'http://webapi.busi.inke.cn/web/live_share_pc?uid='+roomid+'&id='+userid+''
    res2 = requests.get(getTokenUrl,headers=header)
    data = res2.json()
    sec = data['data']['sec']
    nonce = data['data']['nonce']
    print('第二步',sec,nonce)
    websocket.enableTrace(True)
    url = 'wss://chatroom.inke.cn/ws?uid=0&place=room&roomid='+userid+'&token=&time='+str(int(time.time()))+'&nonce='+str('9CVwiDm1zl5lfUahdH0%2F')+'&sec='+str(sec)+'&sid=&_t=1557993100361&from=share&roomid='+userid+'&share_from='+roomid+'&share_type=wx'
    # url = 'wss://chatroom.inke.cn/ws?uid=0&place=room&roomid='+userid+'&token=&time=1557993100&nonce=9CVwiDm1zl5lfUahdH0%2F&sec=708d22f28dccc248c08ad339e98a2a5b&sid=&_t=1557993100361&from=share&roomid=1557987476985654&share_from=723667609&share_type=wx'
    # url='ws://chatroom.inke.cn/ws?uid=0&place=room&roomid='+str(userid)+'&token=&time='++'&nonce='++'&sec='+str(sec)+'&sid=&id='+str(userid)+'&roomid='+str(userid)+'&uid='+str(roomid)+''
    print(url)
    ws = websocket.WebSocketApp(url,
                              on_message = on_message,
                              on_error = on_error,
                              on_close = on_close,
                                header=headers)
    ws.on_open = on_open
    ws.run_forever()

if __name__ == "__main__":
    getkey()

