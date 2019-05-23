const ws = require('ws')

var wscontent = new ws('wss://web-ws.immomo.com/socket.io/?EIO=3&transport=websocket&sid=wtXQA49lfi_BIoaDAN7y');

wscontent.onopen = function(evt) {
  console.log('Connection open ...');
};

wscontent.onmessage = function(evt) {
  console.log('Received Message: ' + evt.data);
};

wscontent.onclose = function(evt) {
  console.log('Connection closed.');
};