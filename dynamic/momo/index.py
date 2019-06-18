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
    print(message)
    maintype='交友'


def on_error(ws, error):
    print(error)

def on_close(ws):
    print("### closed ###")

def on_open(ws):
    ws.send('{"msg_id":1,"client_time":1560665603588,"type":"Sauth","data":{"momoid":"1560665602609","roomid":"14555228220","token":"58798159b9f4eb8850c5dc684e1781bb","barType":"NORMAL"}}')
    # def run(*args):
    #     # for i in range(3):
    #     #     time.sleep(1)
    #     #     ws.send("Hello %d" % i)
    #
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
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
}

header = {
    'Host':'webapi.busi.inke.cn',
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36'
}

def getkey():
    # 房间号
    # roomid = sys.argv[1]
    # userid = sys.argv[2]
    # 用户ID
    # print('第一步',roomid,userid)
    # getTokenUrl = 'http://webapi.busi.inke.cn/web/live_share_pc?uid='+roomid+'&id='+userid+''
    # res2 = requests.get(getTokenUrl,headers=header)
    # data = res2.json()
    # sec = data['data']['sec']
    # nonce = data['data']['nonce']
    # print('第二步',sec,nonce)
    websocket.enableTrace(True)
    url = 'wss://live-api.immomo.com/ws/im'
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

