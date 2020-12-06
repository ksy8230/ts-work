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
let jack2: IPerson = new Person2('jack2', 24)
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

// 클래스 상속
abstract class AbstractPerson5 {
    abstract name: string
    constructor(public age?: number) {}
}
// 상속 받는 클래스는 super 키워드를 호출해야 함
class Person5 extends AbstractPerson5 {
    constructor(public name: string, public age?: number) {
        super(age)
    }
}
let jack5: Person5 = new Person5('jack5', 25)

// 타입 변환
let obj: object = {name : 'jack'};
// let name1 = obj.name; => error : name 속성값이 없다
let name1 = (<IPerson>obj).name;

// 함수 void 타입
function printMe2(name: string, age: number): void {
    console.log('void')
}
// 아래 함수의 시그니쳐는 (string, number) => void
// type 키워드로 타입 별칭 만들기
type stringNumberFunc = (string, number) => void;
let printMe3: stringNumberFunc = function (name: string, age: number): void {}

