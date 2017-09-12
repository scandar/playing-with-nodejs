// var time = 0
// var timer = setInterval(function() {
//     console.log(time);
//     time++;
//     if (time > 5) {
//         console.log('over');
//         clearInterval(timer);
//     }
// }, 500);

// console.log(__dirname);
// console.log(__filename);

//NORMAL FUNCTION STATEMENT
function sayHi() {
    console.log('Hi!');
}
sayHi();

//FUNCTION EXPRESSION
var sayBye = function() {
    console.log('Bye!');
}
sayBye();

//FUNCTION CALLER
var callFunction = function(fun) {
    fun();
}

callFunction(sayHi);
