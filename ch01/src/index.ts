import Person from "./person/Person";
import IPerson from "./person/IPerson";
import { makePerson } from "./person/Person";
import Chance from 'chance';
import * as R from 'ramda';
import { arrayLength, pureDelete, pureSort, doSomething } from "./utills/makeRandomNumber";
import Iterable from "./Iterable";
import Generator from "./generator";
import Async from "./async";
import Compose from "./05.compose";
import Pipe from "./06.pipe";

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
let printMe3: (string, number) => void = function (name: string, age: number): void {}

// 클래스 메서드 구문
// A와 B 클래스는 같은 기능을 한다
export class A {
    value : number = 1
    methods : () => void = () : void => {
        console.log(`${this.value}`)
    }
}

export class B {
    constructor(public value: number = 2) {

    }
    methods (): void {
        console.log(`${this.value}`)
    }
}

let a: A = new A;
a.methods()

let b: B = new B;
b.methods()

// 메서드 체인
export class calculator {
    constructor(public value: number = 0) {

    }
    add(value: number) {
        this.value += value
        return this;
    }
    multiple(value: number) {
        this.value *= value
        return this;
    }
}

let cal: calculator = new calculator;
let result = cal.add(1).add(2).multiple(2).value;
console.log(result);

// for in 문
let names = ['1', '2', '3']
for(let index in names) {
    const name = names[index]
    console.log(`for in 문 ${name}`);
}

// for in 문 객체
let jack = {name: 'jack', age: 32}
for(let property in jack) {
    console.log(`${property}: ${jack[property]}`)
}

// for of 문
for(let name of ['jack', 'jane', 'steve']){
    console.log(name)
}

// 배열의 타입 지정
let numArray : number[] = [1,2,3]
let strArray : string[] = ['1', '2', '3']

console.log(
    arrayLength(numArray), 
    arrayLength(strArray)
)

// readonly
function forcePure(array:readonly number[]): number {
    return array.length;
}

let beforeSort = [6,2,4];
const afterSort = pureSort(beforeSort);
console.log(beforeSort, afterSort);

const mixedArray = [
    [], {name: 'jack'}, {name: 'jane', age: 32}
];
const objectOnly = pureDelete(mixedArray, (val) => Array.isArray(val));
console.log(mixedArray, objectOnly);

// 튜플에 적용하는 비구조화 할당
const [result2, errorMessage] = doSomething();
console.log(result2, errorMessage);

// 반복기
Iterable();
// 생성기
Generator();
// 비동기
Async();
// 함수조합 : compose
console.log('함수조합 : compose')
Compose();
// 함수조합 : pipe
console.log('함수조합 : pipe')
Pipe();

