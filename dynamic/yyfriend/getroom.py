import requests
import re
import json
import sys
import os

header = {
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36'
}

def geturl():
    res = requests.get('http://www.huya.com/cache.php?m=LiveList&do=getLiveListByPage&gameId=4079&tagAll=0&page=1')
    # https://data.3g.yy.com/mobyy/nav/dating/miyu?bkt=0&channel=appstore&compAppid=yymip&hdid=c72e4faad15c429aac337a24c1585a311afb42b8&imei=c72e4faad15c429aac337a24c1585a311afb42b8&ispType=1&loadType=2&mac=c72e4faad15c429aac337a24c1585a311afb42b8&model=iPhone10,3&netType=2&os=iOS&osVersion=12.2&stype=2&uid=0&yyVersion=7.16.1&yyplugins=11,12,113,120')
    res = res.json()
    content = res['data']['datas']
    f = open(os.getcwd()+'/roomid.text','w')
    for i  in range(len(content)):
        try:
            sid = content[i]['profileRoom']
            # ssid = content[i]['ssid']
            # audio = content[i]['tagStyle']
            print(sid)
            # f.write(str(ssid))
            # f.write(' ')
            f.write(str(sid))
            # f.write(' ')
            # f.write(str(audio))
            f.write('\n')
        except:
            roomid = 0
    f.close()
    return True

if __name__=='__main__':
    geturl()


