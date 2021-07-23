var adder = function(a) {
    return `the sum of the 2 numbers is ${a+pi}`
}

var pi = 3.14;

// module.exports.counter = counter
// module.exports.adder = adder
// module.exports.pi = pi
// 同下形式

module.exports = {
        counter: function(arr) {
            return 'There are ' + arr.length + ' elements in the array'
        }, //可以这样写
        adder: adder,
        pi: pi
            // 键：值
    }
    // 暴露对象，对象有三个键