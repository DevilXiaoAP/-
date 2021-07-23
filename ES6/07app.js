var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/readme.txt') //__dirname  全局变量  代表当前目录

// var date = ''
myReadStream.on('date', function(chunk) {
    console.log('new chunk received');
    console.log(chunk);
})
console.log('end');
// myReadSteam.on('date', function() {
//     con
// })