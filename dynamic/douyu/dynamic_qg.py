# -*- coding: UTF-8 -*-
import ast
import re
import socket
import struct
import time
import datetime
import threading
import requests
import csv
import json
import sys
import urllib2
from dcapi_python import *
reload(sys)
sys.setdefaultencoding('utf8')

# 服务器有效 2018.5.21
SERVER_ADDR = ('openbarrage.douyutv.com', 8601)
headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36','charset':'utf-8'}
GIFT = {}
anchor_gift = []
room_id = 0
def get_room_info(uid):
    """根据主播的uid(房间url上的), 获取纯数字的room_id和主播中文名.

    :param uid: str.

    :return room_id: str, 房间id.
            name: str, 主播中文名.
    """

    url = 'http://www.douyu.com/{}'.format(uid)
    print (url)
    r = requests.get(url)
    print (r.text)
    # 提取规则可能随时间变动
    id_pattern = re.compile(r'"room_id":(\d+)')
    name_pattern = re.compile(r'<a class="zb-name"><h1>(.*?)</h1></a>')
    room_id = id_pattern.findall(r.text)[0]
    name = name_pattern.findall(r.text)[0]
    return room_id, name


def send_msg(cfd, msg):
    """发给斗鱼服务器所有的包都得加上消息头, 格式见斗鱼弹幕手册.

    :param msg: str.
    """

    content = msg.encode()
    # 消息长度, 这里加8而不是加12.所以实际tcp数据部分长度会比斗鱼协议头长度大4
    length = len(content) + 8
    # 689代表客户端向服务器发送的数据, 690代表服务器向客户端发送的数据
 #   tpw@SNG
    code = 689
    head = struct.pack('i', length) + struct.pack('i', length) + struct.pack('i', code)
    cfd.sendall(head + content)

def giftcoast():
    try:
    	gifturl = 'https://webconf.douyucdn.cn/resource/common/prop_gift_list/prop_gift_config.json'
    	giftcontent = urllib2.Request(gifturl,headers=headers)
    	gifthtml = urllib2.urlopen(giftcontent).read()
    	giftstr = str(gifthtml).split('(')[1].split(')')[0]
    	giftsoup = json.loads(str(giftstr))
    	gifturl2 = 'https://webconf.douyucdn.cn/resource/common/gift/gift_template/725.json'
    	giftcontent2 = urllib2.Request(gifturl2,headers=headers)
    	gifthtml2 = urllib2.urlopen(giftcontent2).read()
    	giftstr2 = str(gifthtml2).split('(')[1].split(')')[0]
    	giftsoup2 = json.loads(str(giftstr2))['data']
    	gift2array = {}
    	for i in range(len(giftsoup2)):
            gift2array[str(giftsoup2[i]['id'])] = giftsoup2[i]
            gift = dict(giftsoup['data'].items()+gift2array.items())
    except:
	    gift = []
    return gift

def init(uid):
    """向服务器发送相应数据包, 准备接收弹幕.

    :param uid: str, 主播的uid(房间url上的).

    :return cfd: 套接字描述符.
    """

    #room_id, name = get_room_info(uid)
    room_id = uid
    name = "xxxx"

    cfd = socket.socket(family=socket.AF_INET, type=socket.SOCK_STREAM)
    cfd.connect(SERVER_ADDR)
    # loginreq中的req指requests, 还需要紧接着发下面一个包, 服务器会返回loginres
    msg_login = 'type@=loginreq/username@=/password@=/roomid@={}/\x00'.format(room_id)
    send_msg(cfd, msg_login)
    print('你进入了{}的直播间，房间id是{}'.format(name, room_id))
    # 直觉认为这里暂停一秒比较好
    time.sleep(1)
    # gid=-9999代表接收海量弹幕, 发完下面这个包, 服务器才会向客户端发送弹幕
    msg_join = 'type@=joingroup/rid@={}/gid@=-9999/\x00'.format(room_id)
    send_msg(cfd, msg_join)
    return cfd

def anchor(roomid):
    print(1)
    islive = 0
    game_type = 'xx'
    online = 0
    anchorname = 'xx'
    anchor_gift_json = {'20002':'{gx:2000,name:123}'}
    try:
    	anchorurl = 'http://open.douyucdn.cn/api/RoomApi/room/'+str(sys.argv[1])
    	anchorcontent = urllib2.Request(anchorurl,headers=headers)
    	anchorhtml = urllib2.urlopen(anchorcontent).read()
    	anchorstr = str(anchorhtml)
    	anchorsoup = json.loads(str(anchorstr))
    	anchor_gift = anchorsoup['data']['gift']
        gift_str = ''
        for i in range(len(anchor_gift)):
            #print(str(anchor_gift[i]['name']))
            gift_str =gift_str+'\"'+str(anchor_gift[i]['id'])+'\":{\"name\":\"'+str(anchor_gift[i]['name'])+'\",\"pc\":'+str(anchor_gift[i]['pc'])+'},'
            time.sleep(10)
        gift_str ='{'+ gift_str +'\"999999\":{} }'
        anchor_gift_json = json.loads(str(gift_str))
        except:
	        print('error')
    #gift_str ='{'+ gift_str + '\"end\":1}'
    #anchor_gift_json = json.loads(str(gift_str))
    return anchor_gift_json

def get_dm(cfd,uid):

    room_id = uid
    """接受服务器消息, 并提取弹幕信息."""
    pattern = re.compile(b'type@=chatmsg/.+?/uid@=(.+?)/nn@=(.+?)/txt@=(.+?)/.+?/level@=(.+?)/')
    pattern2 = re.compile(b'type@=uenter/.+?/uid@=(.+?)/nn@=(.+?)/level@=(.+?)/.+?/nl@=(.+?)/')
    pattern3 = re.compile(b'type@=dgb/.+?/gfid@=(.+?)/.+?/uid@=(.+?)/nn@=(.+?)/.+?/level@=(.+?)/.+?/gfcnt@=(.+?)/hits@=(.+?)/')
    while True:
        # 接收的包有可能被分割, 需要把它们重新合并起来, 不然信息可能会缺失
        buffer = b''
        while True:
            recv_data = cfd.recv(4096)
            buffer += recv_data
            if recv_data.endswith(b'\x00'):
                break

        for uid, nn, txt, level in pattern.findall(buffer):
            # 斗鱼有些表情会引发unicode编码错误
            # `error='replace'`, 把其替换成'?'
            uid = uid.decode(errors='replace')
            nn = nn.decode(errors='replace')
            txt = txt.decode(errors='replace').strip()
            level = level.decode()
            time = datetime.datetime.now().strftime("%Y%m%d%H%M%S")

            output_list = [time, 'chatmsg', uid, nn, txt, level]
            #print('弹幕:'+str(txt))
	    dcapi = 'dc04729'
	    dctype = 0
	    dccontent = 'plat_id=douyu&maintype=交友&roomid='+str(room_id)+'&content='+str(txt).encode('utf-8')+'&user_name='+str(nn).encode('utf-8')+'&user_id='+str(uid)

	    logger = CLogger()
	    ret = logger.init(dcapi)
	    basedata = dccontent.encode('utf-8').strip()
	    logger.write_baselog(basedata,len(basedata), 0)

        for uid, nn, level, nl in pattern2.findall(buffer):
            uid = uid.decode('utf-8')
            nn = nn.decode('utf-8')
            level = level.decode('utf-8')
            nl = nl.decode('utf-8')
            time = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
            #print (2, uid.encode('utf-8'), nn.encode('utf-8'))
            dcapi_enter = 'dc04731'
            dctype = 0
#	    print(room_id)
            dccontent = 'plat_id=douyu&maintype=交友&roomid='+str(room_id)+'&user_name='+str(nn).encode('utf-8')+'&user_id='+str(uid)
            logger = CLogger()
            ret = logger.init(dcapi_enter)
            basedata = dccontent.encode('utf-8').strip()
            logger.write_baselog(basedata,len(basedata), 0)
            output_list = [time, uid, nn, level, nl]
            # with open ("enter.csv", "a+") as csvfile:
            #     w = csv.writer(csvfile)
            #     w.writerow(output_list)

        for gfid, uid, nn, level, gfcnt, hits in pattern3.findall(buffer):
            gfid = gfid.decode('utf-8')
            uid = uid.decode('utf-8')
            nn =  nn.encode('utf-8')
            level = level.decode('utf-8')
            gfcnt = gfcnt.decode('utf-8')
            hits = hits.decode('utf-8')
            time = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
	    dcapi_gift = 'dc04730'
            dctype = 0
	    coast = 0
	    giftname='未知'
	    #print(GIFT[str(gfid)])
	    try:
		giftname = GIFT[str(gfid)]['name']
		if(str(gfid)!='824' and str(gfid)!= '1948'):
			coast = float(GIFT[str(gfid)]['devote'])*10
	    	else:
			coast = 0
	    except:
		coast = 0
	    try:
		if(str(gfid)!='824' and str(gfid)!= '1948'):
			if(str(gfid) in anchor_gift.keys()):
				print('giftcontent:',str(gfid),anchor_gift[str(gfid)])
				giftname = anchor_gift[str(gfid)]['name']
				coast = float(anchor_gift[str(gfid)]['pc'])*100
				if(str(gfid)=='20000'):
					coast=0
		else:
                	coast = 0
			giftname = GIFT[str(gfid)]['name']
	    #	print(coast,giftname.encode('utf-8'))
	    except:
		coast = '0'
	    #print(coast,eval(gfid))
	    cost = int(coast)
            dccontent ='plat=douyu&maintype=交友&gift_name='+str(giftname).encode('utf-8')+'&cost='+str(cost)+'&plat_id=11&roomid='+str(room_id)+'&gift_id='+str(gfid).encode('utf-8')+'&gift_num='+gfcnt+'&user_name='+str(nn).encode('utf-8')+'&user_id='+str(uid)+'&combo_num='+str(hits)
            print(dccontent.encode('utf-8'))
	    logger = CLogger()
            ret = logger.init(dcapi_gift)
            basedata = dccontent.encode('utf-8').strip()
            logger.write_baselog(basedata,len(basedata), 0)
           # print('nn:'+nn)
            #print('nn:'+nn+',3,gfid'+gfid)

            output_list = [time, gfid, uid, nn, level, gfcnt, hits]
            # with open ("gift.csv", "a+") as csvfile:
            #     w = csv.writer(csvfile)
            #     w.writerow(output_list)



def keep_live(cfd):
    """每隔40s发送心跳包."""

    while True:
        time.sleep(40)
        msg_keep = 'type@=mrkl/\x00'
        send_msg(cfd, msg_keep)

def main():
    #uid = input('请输入主播uid：')
    cfd = init(int(sys.argv[1]))
    #afd = anchor(int(sys.argv[1]))
    # daemon参数设为True, 则主线程结束后会直接退出,
    # 而不会等待子线程结束后再退出,
    # 并且此时子线程也会结束.
    t = threading.Thread(target=keep_live, args=(cfd,))
    t.start()
    get_dm(cfd,int(sys.argv[1]))

if __name__ == '__main__':
   GIFT = giftcoast()
   anchor_gift = anchor(int(sys.argv[1]))
   print(anchor_gift)
   time.sleep(20)
   main()

