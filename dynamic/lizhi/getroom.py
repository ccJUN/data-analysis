# -*- coding: UTF-8 -*-
import websocket
import time
import time
import pprint
import sys
import requests
import json
import thread
# reload(sys)
# sys.setdefaultencoding('utf-8')

header={'User-Agent':'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Mobile Safari/537.36'}

def getalllive():
    res = requests.get('https://appweb.lizhi.fm/smallApp/getLiveList?pageNum=1',headers=header)
    content = res.json()
    data  =content['ret']['dataList']
    num = sys.argv[1]
    liveid = data[num]['liveId']
    tag = data[num]['tag']
    t = int(float(time.time())*1000)
    live(liveid,t,tag)



# 全局心跳
def live(liveId,starttime,subtype):
    liveid = liveId
    url = 'https://appweb.lizhi.fm/live/comments?liveId='+liveid+'&start='+str(starttime)+'&count=20'
    print(url)
    res = requests.get(url,headers=header)
    content = res.json()
    nexttime = content['comments']['end']
    try:
        data = content['comments']['list']
        print(data)
        for i in data:
            username = data[i]['username']
            userid = data[i]['userid']
            danmu = data[i]['comment']
    except:
        pass
    time.sleep(2.2)
    live(liveid,nexttime,subtype)

if __name__ == "__main__":
    getalllive()

