# -*- coding: UTF-8 -*-
import os
import re
import json
import sys
import time
import requests
import datetime
import sys

Global_Heads = {
    'Connection': 'Keep-Alive',
    'Accept': 'text/html, application/xhtml+xml, */*',
    'Accept-Language': 'en-US,en;q=0.8,zh-Hans-CN;q=0.5,zh-Hans;q=0.3',
    'Accept-Encoding': 'gzip, deflate',
    'User-Agent': 'Mozilla/6.1 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko'
}


def getyymusic():
    url = 'https://data.3g.yy.com/mobyy/nav/dance/idx?bkt=0&channel=appstore&compAppid=yymip&hdid=c72e4faad15c429aac337a24c1585a311afb42b8&imei=c72e4faad15c429aac337a24c1585a311afb42b8&ispType=1&loadType=1&mac=c72e4faad15c429aac337a24c1585a311afb42b8&model=iPhone10%2C3&netType=2&os=iOS&osVersion=12.2&stype=2&uid=0&yyVersion=7.16.1&yyplugins=11%2C12%2C113%2C120'
    res = requests.get(url)
    resJson = res.json() 
    print(resJson)_