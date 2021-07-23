// setTimeout(() => {
//     console.log('3 seconds have passed')
// }, 3000);

// let time = 0
// let timer = setInterval(() => {
//     time += 1;
//     console.log(time + ' seconds have passed')
//     if (time > 15) {
//         clearInterval(timer)
//     }
// }, 1000);

// console.log(__dirname)

// function callFunction(fun, name) {
//     fun(name)
// }

// callFunction(function(name) {
//     console.log(name + 'Bye');
// }, "biu")



// 04
// var stuff = require('./02-counter')
//     // require一个对象进来

// // var pi = require('./02-counter').pi;

// console.log(stuff.counter(['ruby', 'node.js', 'react']))
// console.log(stuff.adder(3))

// // console.log(stuff.pi)


// 05事件
// var events = require('events')

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(message) {
//         console.log(message)
//     }) //(事件，回调函数)
// myEmitter.emit('someEvent', 'the event was emitted')

var events = require('events') //包含文件系统模块

var util = require('util')

var Person = function(name) {
    this.name = name
}

util.inherits(Person, events.EventEmitter)

var xi = new Person('xis')
var lily = new Person('lily')
var lucy = new Person('lucy')

var person = [xi, lily, lucy]

person.forEach(function(person) {
    person.on('speak', function(message) {
        console.log(person.name + " said: " + message)
    })
})

xi.emit('speak', 'hi')
lily.emit('speak', 'I love you')
lucy.emit('speak', 'I want a curry')