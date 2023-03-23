//?Events module allows institutions to group objects together for a specific purpose

//?importing the events module from node.js. Its a build in module
const EventEmitter = require('events'); 


const eventEmitter = new EventEmitter();

//?creating an event listener
eventEmitter.on('tutorial', (n1,n2) => {
    console.log(n1 + n2);
});

//? emitting the event
//? emit is used to trigger an event
eventEmitter.emit('tutorial', 1, 2);

//? creating a class that inherits from the event emitter
class Person extends EventEmitter {
    constructor(name) {
        super();
        
        this._name = name;
    }

    get name() {
        return this._name;
    }
}


let pedro = new Person('Pedro');
let christina = new Person('Christina');

christina.on('name', () => {
    console.log('my name is ' + christina.name);
});

pedro.on('name', () => {
    console.log('my name is ' + pedro.name);
});

pedro.emit('name');
christina.emit('name');
