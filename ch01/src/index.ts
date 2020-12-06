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