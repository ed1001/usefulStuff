class Person1 {
    talk() {
        console.log("hello from class")
    }
}

const terry = new Person1()

console.log(Object.getPrototypeOf(terry) === Person1.prototype) // true
// Object.getPrototypeOf(obj) is preferred over obj.__proto__

// the above is similar to:

// Constructor function
function Person2() {
    this.anotherFunc = () => 'whatup'
}

Person2.prototype.talk = function () {
    console.log("Hello from prototype")
}

const barry = new Person2();
barry.talk()

// the talk function is defined on the prototype but the anotherFunc is defined as a property, not a method
// and so will be copied into each instance of Person2 as a unique entity and so cannot modify 'globally' for all
// instances like you can with methods on the prototype

// only define instance variables inside the constructor function, define methods on the prototype

// Pure Objects

const person = {
    talk() {
        console.log("Hello from pure object")
    }
}

const brad = Object.create(person)
brad.talk()

const maria = {}
Object.setPrototypeOf(maria, person)
maria.talk();
