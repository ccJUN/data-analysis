import requests
import re
import json
import sys
import os

header = {
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36'
}

def geturlyinyue():
    res = requests.get('https://data.3g.yy.com/mobyy/nav/sing/idx?bkt=0&channel=appstore&compAppid=yymip&hdid=c72e4faad15c429aac337a24c1585a311afb42b8&imei=c72e4faad15c429aac337a24c1585a311afb42b8&ispType=1&loadType=2&mac=c72e4faad15c429aac337a24c1585a311afb42b8&model=iPhone10%2C3&netType=2&os=iOS&osVersion=12.2&stype=2&uid=1870127427&yyVersion=7.17.0&yyplugins=11%2C12%2C113%2C120')
    res = res.json()
    content = res['data'][1]['data']
    f = open(os.getcwd()+'/yinyue.text','w')
    for i  in range(len(content)):
        try:
            sid = content[i]['sid']
            ssid = content[i]['ssid']
            print(sid)
            f.write(str(sid))
            f.write(' ')
            f.write(str(ssid))
            f.write('\n')
        except:
            roomid = 0
    f.close()
    return True

def geturlwudao():
    res = requests.get('https://data.3g.yy.com/mobyy/nav/sing/idx?bkt=0&channel=appstore&compAppid=yymip&hdid=c72e4faad15c429aac337a24c1585a311afb42b8&imei=c72e4faad15c429aac337a24c1585a311afb42b8&ispType=1&loadType=2&mac=c72e4faad15c429aac337a24c1585a311afb42b8&model=iPhone10%2C3&netType=2&os=iOS&osVersion=12.2&stype=2&uid=1870127427&yyVersion=7.17.0&yyplugins=11%2C12%2C113%2C120')
    res = res.json()
    content = res['data'][1]['data']
    f = open(os.getcwd()+'/wudao.text','w')
    for i  in range(len(content)):
        try:
            sid = content[i]['sid']
            ssid = content[i]['ssid']
            print(sid)
            f.write(str(sid))
            f.write(' ')
            f.write(str(ssid))
            f.write('\n')
        except:
            roomid = 0
    f.close()
    return True

def geturlwudao():
    res = requests.get('http://www.huya.com/cache.php?m=LiveList&do=getLiveListByPage&gameId=4079&tagAll=0&page=1')
    # https://data.3g.yy.com/mobyy/nav/sing/idx?bkt=0&channel=appstore&compAppid=yymip&hdid=c72e4faad15c429aac337a24c1585a311afb42b8&imei=c72e4faad15c429aac337a24c1585a311afb42b8&ispType=1&loadType=2&mac=c72e4faad15c429aac337a24c1585a311afb42b8&model=iPhone10%2C3&netType=2&os=iOS&osVersion=12.2&stype=2&uid=1870127427&yyVersion=7.17.0&yyplugins=11%2C12%2C113%2C120')
    res = res.json()
    content = res['data'][1]['data']
    f = open(os.getcwd()+'/wudao.text','w')
    for i  in range(len(content)):
        try:
            sid = content[i]['sid']
            ssid = content[i]['ssid']
            print(sid)
            f.write(str(sid))
            f.write(' ')
            f.write(str(ssid))
            f.write('\n')
        except:
            roomid = 0
    f.close()
    return True

if __name__=='__main__':
    geturl()


