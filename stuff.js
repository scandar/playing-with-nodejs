var counter = function(arr) {
    return arr.length;
};

var adder = function(a,b) {
    return a+b;
}

var pi = 3.142;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};
