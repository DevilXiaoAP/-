// var fs = require("fs")
// var readMe = fs.readFileSync('readMe.txt', 'utf-8', function(err, date) {
//     console.log(date)
// })
// console.log('finished')

// fs.writeFileSync('writeMe', 'hello,word!' + readMe)


// var fs = require("fs")
// var readMe = fs.readFile('readMe.txt', 'utf-8', function(err, date) {
//     fs.writeFile("writeMe.txt", date, function() {
//         console.log('writeMe has finished')
//     })
// })
// console.log('finished')

var fs = require('fs')

// fs.unlink('writeMe.txt', function() {
//         console.log('delete writeMe.txt file')
//     }) //异步

// fs.unlinkSync('writeMe') //同步

// fs.mkdirSync('stuff') //创建目录
// fs.rmdirSync('stuff') //删除目录


fs.mkdir('stuff', function() {
    fs.readFile('readMe.txt', 'utf-8', function(err, date) {
        fs.writeFile('./stuff/writeMe.txt', date, function() {
            console.log('copy successfully');
        })
    })
})