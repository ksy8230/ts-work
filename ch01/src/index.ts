import Person from "./person/Person";
import IPerson from "./person/IPerson";
import { makePerson } from "./person/Person";
import Chance from 'chance';
import * as R from 'ramda';

const chance = new Chance();
let persons : IPerson[] = R.range(0, 2).map((n: number) => new Person(chance.name(), chance.age()));

console.log(persons);

// 익명 인터페이스 
let ai : {
    name : string,
    age : number,
    etc? : boolean
} = { name : 'ai', age : 25 }

function printMe(me: {name: string, age: number, etc?:boolean}) {
    console.log('print me', me);
}

printMe(ai);

// 클래스 생성자
// Person3을 함축한 것이 Person3

// 1
class Person2 implements IPerson {
    constructor(public name: string, public age: number) {}
}
let jack2: Person2 = new Person2('jack2', 24)
// 2
class Person3 {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
let jack3 : Person3 = new Person3('jack3', 24)
