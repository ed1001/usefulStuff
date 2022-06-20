// Implicit typing
let myId = 12
// myId = '123' not possible

// Tuple
let ids: number[] = [1,2,3]
let nameAndId: [string, number] = ['bert', 123]
let matrix: [string, number][] = [['blue', 123], ['red', 5]]

// Unions
let myUnion: number | string = 12
myUnion = '12'

// Index signature
interface MyObject {
    [anyStringKey: string]: number;
}

const obj2: MyObject = {'123': 123}

// Enum
enum Directions {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
}

console.log(Directions.LEFT)
// output: 'LEFT'

// Type Assertion
const myRandom: any = 123
let myAsserted = myRandom as string
// myAsserted = 12 not possible
let myOtherAsserted = <number>myRandom
console.log(myAsserted)

// Read only
interface SomeInterface {
    readonly value: number
    name: string
}

const obj: SomeInterface = {
    value: 123,
    name: 'ed',
}

// obj.value = 3 not possible

// Functions

interface MyFunc {
    (x: number, y: number): number
}

const specialFunc: MyFunc = (x, y) => x + y

// Classes
// interfaces for a class define public contracts only so cannot include private members in interface
interface PersonInterface {
    name: string
    id: number
    talk(lang: string): string
}

class Person implements PersonInterface {
    // name: string
    // id: number
    // private readonly secret: string

    // can either add members as above and assign in constructor or in the constructor signature
    // members are assigned automatically

    static counter: number = 0

    constructor(public name: string, public id: number, private readonly _secret: string) {
        Person.counter++;
    }

    static whatsMyName() {
        return "Person"
    }

    getSecret() {
       return this._secret
    }

    talk(lang: string) {
        console.log(lang)
        return `${this.name} - ${this.id})`
    }

    private _privateMethod() {
        console.log("you can't call me")
    }
}

const me = new Person('ed', 123, 'mySecret');
const you = new Person('alex', 123, 'yourSecret');
// console.log(me.secret) not possible
// me._privateMethod() not possible
console.log(me.name)
me.getSecret()
console.log(Person.whatsMyName())
console.log(Person.counter)

// Generics
const getArray = <T>(items: T[]): T[] => {
    return new Array().concat(items)
}

function getArray1<T>(items: T[]): T[] {
    return new Array().concat(items)
}

getArray<string>(['q', 'w', 'e'])
// getArray<number>(['q', 'w', 'e']) not possible

// When we construct new literal expressions with const assertions, we can signal to the language that
// no literal types in that expression should be widened (e.g. no going from "hello" to string)
// object literals get readonly properties
// array literals become readonly tuples

// Type '"hello"'
let x = "hello" as const;
// Type 'readonly [10, 20]'
let y = [10, 20] as const;
// Type '{ readonly text: "hello" }'
let z = { text: "hello" } as const;
