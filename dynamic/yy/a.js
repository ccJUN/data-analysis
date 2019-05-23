var a = require('./a.json')
var rl = a.data[0].data
console.log(rl)
for(var i=0;i<rl.length;i++){
    console.log(rl[i].sid)
}
