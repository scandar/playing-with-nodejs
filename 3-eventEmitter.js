var util = require('util');
var events = require('events');

// var myEmitter = new events.EventEmitter();
// myEmitter.on('eventExample', function(msg) {
//     console.log(msg);
// });
// myEmitter.emit('eventExample', 'event message should be displayed in console');

var Person = function (name) {
    this.name = name;

    this.speak = function(msg) {
        this.emit('speak', msg);
    }
}

util.inherits(Person, events.EventEmitter);

var girges = new Person('Girges');
var mike = new Person('mike');
var spike = new Person('spike');

var people = [girges,mike,spike];

people.forEach(function (person) {
    person.on('speak', function(msg) {
        console.log(person.name + ' said: ' + msg);
    });
});

girges.speak('Hello!');
mike.speak('what\'s up dude?');
spike.speak('have you seen the show yesterday?');
girges.speak('wow!');
