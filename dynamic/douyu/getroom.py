import time
import requests
import re
import json
import sys
import os

time = int(time.time())
print(time)

headers = {
    'User-Agent':'ios/5.800 (ios 12.2; ; iPhone X (A1865/A1902))',
    'User-Device':'M0REN0MwMjMyODEzNEFGQkE4Q0FDRDdFOUUwRjczNkN8NS44MDA=',
    'aid': 'ios',
    'Accept-Language':'zh-Hans-CN;q=1',
    'Accept': '*/*'
}

payload={
    'client_sys':'ios'
}
cookie={
    'acf_did':'3DD7C02328134AFBA8CACD7E9E0F736C'
}

def geturlyydt():
    res = requests.get('https://www.douyu.com/gapi/rkc/directory/2_422/1',headers=headers)
    content = res.json()
    data = content['data']['rl']
    f = open(os.getcwd()+'/yydt.text','w')
    for i  in range(len(data)):
        rid = data[i]['rid']
        f.write(str(rid))
        f.write('\n')
    f.close()
    return True

def geturlfm():
    res = requests.get('https://www.douyu.com/gapi/rkc/directory/2_405/1',headers=headers)
    content = res.json()
    data = content['data']['rl']
    f = open(os.getcwd()+'/fm.text','w')
    for i  in range(len(data)):
        rid = data[i]['rid']
        print(rid)
        f.write(str(rid))
        f.write('\n')
    f.close()
    return True

def geturlgame():
    res = requests.get('https://www.douyu.com/gapi/rkc/directory/2_441/1',headers=headers)
    content = res.json()
    data = content['data']['rl']
    f = open(os.getcwd()+'/game.text','w')
    for i  in range(len(data)):
        rid = data[i]['rid']
        f.write(str(rid))
        f.write('\n')
    f.close()
    return True

def geturlqg():
    res = requests.get('https://www.douyu.com/gapi/rkc/directory/2_447/1',headers=headers)
    content = res.json()
    data = content['data']['rl']
    f = open(os.getcwd()+'/qg.text','w')
    for i  in range(len(data)):
        rid = data[i]['rid']
        print(rid)
        f.write(str(rid))
        f.write('\n')
    f.close()
    return True

def geturlyh():
    res = requests.get('https://www.douyu.com/gapi/rkc/directory/2_645/1',headers=headers)
    content = res.json()
    data = content['data']['rl']
    f = open(os.getcwd()+'/yh.text','w')
    for i  in range(len(data)):
        rid = data[i]['rid']
        f.write(str(rid))
        f.write('\n')
    f.close()
    return True

def geturllm():
    res = requests.get('https://www.douyu.com/gapi/rkc/directory/2_441/1',headers=headers)
    content = res.json()
    data = content['data']['rl']
    f = open(os.getcwd()+'/lm.text','w')
    for i  in range(len(data)):
        rid = data[i]['rid']
        print(rid)
        f.write(str(rid))
        f.write('\n')
    f.close()
    return True

if __name__=='__main__':
    geturlyydt()
    geturlfm()
    geturlgame()
    geturlyh()
    geturlqg()
    geturllm()