import json
from ws4py.client.threadedclient import WebSocketClient
class CG_Client(WebSocketClient):

    def opened(self):
        req = '{"event":"subscribe", "channel":"eth_usdt.deep"}'
        self.send(req)

    def closed(self, code, reason=None):
        print("Closed down:", code, reason)

    def received_message(self, resp):
        resp = json.loads(str(resp))
        data = resp['data']
        if type(data) is dict:
            ask = data['asks'][0]
            print('Ask:', ask)
            bid = data['bids'][0]
            print('Bid:', bid)


if __name__ == '__main__':
    ws = None
    try:
        ws = CG_Client('ws://chatroom.inke.cn/ws?uid=0&place=room&roomid=1554969555151876&token=&time=1554970710&nonce=20oV9tKs8zNHvhQtJBCS&sec=94a6084d6116899072041380f3b5f3f4&sid=&id=1554969555151876&roomid=1554969555151876&uid=14366329')
        ws.connect()
        ws.run_forever()
    except KeyboardInterrupt:
        ws.close()