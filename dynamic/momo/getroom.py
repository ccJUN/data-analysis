import requests
import re
import json
import sys

header = {
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36'
}

def geturl():

    res = requests.get('https://service.inke.cn/api/live/card_polymerization?user_level=2&sub_tab_key=004201901252IS2O&stay_time=0&longitude=200&live_uid=0&latitude=200&type=0&slide_pos=0&location=%2C%2C&refurbish_mode=0&channel_id=4&card_pos=0&interest=0&gender=1&tab_key=00420190126LHHBM&lc=0000000000000144&cc=TG0001&cv=IK7.0.60_Iphone&proto=13&idfa=C22E9D1B-8CF2-4C1F-A379-25E3CBE4E52B&idfv=486BD2A2-EC8A-4636-ACD6-62631AFB740C&devi=6307984a4ba7a177ae9fc0ff2d41e8ada290d9bc&osversion=ios_12.200000&ua=iPhone10_3&imei=&imsi=&uid=723667609&sid=20fywzWsrorOzKRUUIWkfLrnSIsd3bJModzxfGxPNxti2jvcjKaobEi3&conn=WiFi&mtid=d41d8cd98f00b204e9800998ecf8427e&mtxid=&logid=264,293,195,197,226,229,10002,10210,20110,30206,40201,50101,50208,50306,60201,70004,80009,80108,80204,80303,90006,100004,100103,200805&smid=D2PevHt9XKJiAaHHZ7BV3704TR5n3Y1QigUG7BadHTvZ4X7d&ndid=&ast=1&s_sg=a9dd96c75243058c90f650454168f111&s_sc=100&s_st=1557972608&code2973511926=1557973463327')
    # https://service.inke.cn/api/live/card_polymerization?user_level=2&sub_tab_key=004201901250UJPK&stay_time=0&longitude=200&live_uid=0&latitude=200&type=0&slide_pos=0&location=%2C%2C&refurbish_mode=0&channel_id=4&card_pos=0&interest=0&gender=1&tab_key=00420190126LHHBM&lc=0000000000000144&cc=TG0001&cv=IK7.0.60_Iphone&proto=13&idfa=C22E9D1B-8CF2-4C1F-A379-25E3CBE4E52B&idfv=486BD2A2-EC8A-4636-ACD6-62631AFB740C&devi=6307984a4ba7a177ae9fc0ff2d41e8ada290d9bc&osversion=ios_12.200000&ua=iPhone10_3&imei=&imsi=&uid=723667609&sid=20fywzWsrorOzKRUUIWkfLrnSIsd3bJModzxfGxPNxti2jvcjKaobEi3&conn=WiFi&mtid=d41d8cd98f00b204e9800998ecf8427e&mtxid=&logid=264,293,195,197,226,229,10002,10210,20110,30206,40201,50101,50208,50306,60201,70004,80009,80108,80204,80303,90006,100004,100103,200805&smid=D2PevHt9XKJiAaHHZ7BV3704TR5n3Y1QigUG7BadHTvZ4X7d&ndid=&ast=1&s_sg=a9dd96c75243058c90f650454168f111&s_sc=100&s_st=1557972608&code3581044578=1557973373245')
    # https://service.inke.cn/api/live/card_polymerization?user_level=2&sub_tab_key=00420190125O5RNR&stay_time=0&longitude=200&live_uid=0&latitude=200&type=0&slide_pos=0&location=%2C%2C&refurbish_mode=0&channel_id=4&card_pos=0&interest=0&gender=1&tab_key=00420190126LHHBM&lc=0000000000000144&cc=TG0001&cv=IK7.0.60_Iphone&proto=13&idfa=C22E9D1B-8CF2-4C1F-A379-25E3CBE4E52B&idfv=486BD2A2-EC8A-4636-ACD6-62631AFB740C&devi=6307984a4ba7a177ae9fc0ff2d41e8ada290d9bc&osversion=ios_12.200000&ua=iPhone10_3&imei=&imsi=&uid=723667609&sid=20fywzWsrorOzKRUUIWkfLrnSIsd3bJModzxfGxPNxti2jvcjKaobEi3&conn=WiFi&mtid=d41d8cd98f00b204e9800998ecf8427e&mtxid=&logid=264,293,195,197,226,229,10002,10210,20110,30206,40201,50101,50208,50306,60201,70004,80009,80108,80204,80303,90006,100004,100103,200805&smid=D2PevHt9XKJiAaHHZ7BV3704TR5n3Y1QigUG7BadHTvZ4X7d&ndid=&ast=1&s_sg=a9dd96c75243058c90f650454168f111&s_sc=100&s_st=1557972608&code3445652912=1557973283250')
    # https://service.inke.cn/api/live/card_polymerization?user_level=2&sub_tab_key=004201901252IS2O&stay_time=0&longitude=200&live_uid=0&latitude=200&type=0&slide_pos=0&location=%2C%2C&refurbish_mode=0&channel_id=4&card_pos=0&interest=0&gender=1&tab_key=00420190126LHHBM&lc=0000000000000144&cc=TG0001&cv=IK7.0.60_Iphone&proto=13&idfa=C22E9D1B-8CF2-4C1F-A379-25E3CBE4E52B&idfv=486BD2A2-EC8A-4636-ACD6-62631AFB740C&devi=6307984a4ba7a177ae9fc0ff2d41e8ada290d9bc&osversion=ios_12.200000&ua=iPhone10_3&imei=&imsi=&uid=723667609&sid=20fywzWsrorOzKRUUIWkfLrnSIsd3bJModzxfGxPNxti2jvcjKaobEi3&conn=WiFi&mtid=d41d8cd98f00b204e9800998ecf8427e&mtxid=&logid=264,293,195,197,226,229,10002,10210,20110,30206,40201,50101,50208,50306,60201,70004,80009,80108,80204,80303,90006,100004,100103,200805&smid=D2PevHt9XKJiAaHHZ7BV3704TR5n3Y1QigUG7BadHTvZ4X7d&ndid=&ast=1&s_sg=a9dd96c75243058c90f650454168f111&s_sc=100&s_st=1557972608&code2973511926=1557973463327')
    # https://service.inke.cn/api/live/theme_card_recommend?user_level=2&longitude=200&live_uid=0&stay_time=0&latitude=200&type=1&slide_pos=0&location=%2C%2C&refurbish_mode=0&city_tab_key=00420190125E5XMS%2C%E6%8B%8D%E5%8D%96&channel_id=4&card_pos=0&interest=0&gender=1&tab_key=00420190125E5XMS&lc=0000000000000144&cc=TG0001&cv=IK7.0.60_Iphone&proto=13&idfa=C22E9D1B-8CF2-4C1F-A379-25E3CBE4E52B&idfv=486BD2A2-EC8A-4636-ACD6-62631AFB740C&devi=6307984a4ba7a177ae9fc0ff2d41e8ada290d9bc&osversion=ios_12.200000&ua=iPhone10_3&imei=&imsi=&uid=723667609&sid=20fywzWsrorOzKRUUIWkfLrnSIsd3bJModzxfGxPNxti2jvcjKaobEi3&conn=WiFi&mtid=d41d8cd98f00b204e9800998ecf8427e&mtxid=&logid=264,293,195,197,226,229,10002,10210,20110,30206,40201,50101,50208,50306,60201,70004,80009,80108,80204,80303,90006,100004,100103,200805&smid=D2PevHt9XKJiAaHHZ7BV3704TR5n3Y1QigUG7BadHTvZ4X7d&ndid=&ast=1&s_sg=2e7fbaeb509a82bc5905d9daed3a23ea&s_sc=100&s_st=1557972608&code2686681850=1557972915980',headers=header
    res = res.json()
    cards = res['cards']
    for i  in range(len(cards)):
        try:
            roomid = cards[i]['data']['live_info']['share_addr'].split('uid=')[1].split('&liveid')[0]
            liveid = cards[i]['data']['live_info']['id']
            f = open("xiangqin.text", "a+")
            f.write(roomid)
            f.write(' ')
            f.write(liveid)
            f.write('\n')
            f.close()
            print('===========================')
            print(roomid+'\n')
            print('===========================')
            
        except:
            roomid = 0

    return True

if __name__=='__main__':
    geturl()


