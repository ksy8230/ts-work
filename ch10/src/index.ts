import { type } from "os";
import CalcAreaTest from "./calcArea-test";
import { Calculator } from "./FBound/Calculator";
import { printValue, Valuable } from "./printValue";
import TypeGuard from "./TypeGuard/BirdAndFish";

printValue(new Valuable<number>(1)); // 1
printValue(new Valuable<boolean>(true)); // true
printValue(new Valuable(1)); // 1
printValue(new Valuable(true)); // true

// new 타입 제약
// 타입스크립트 컴파일러는 타입의 타입은 허용하지 않는다
// const create = <T>(type: T): T => new type(); 

// 여기서 제약 구문은 중괄호로 new() 부분은 감싸서 new()를 메서드 형태로 표현
const create0 = <T extends {new(): T}>(type: T): T => new type();

// 중괄호를 없앤 간결한 버전 ( {new(): T} 과 new() => T는 같은 의미 )
const create = <T>(type: new() => T): T => new type();

// new 연산자를 type에 적용하면서 type 생성자 쪽으로 매개변수도 전달해야할 때
const create2 = <T>(type: {new(...args): T}, ...args): T => new type(...args);



// test code
class Point {constructor(public x: number, public y: number) {}}

[create2(Date), create2(Point, 0, 0)].forEach(s => console.log(s))

// index 타입 제약
const obj = {name: 'jjj', age: 30, city: 'seoul', country: 'KR'};
const pick = <T, K extends keyof T>(obj: T, keys: K[]) => keys.map(key => ({[key]: obj[key]})).reduce((result, value) => ({...result, ...value}), {});
console.log(
    pick(obj, ['name', 'age'])
)
/**
 * error : nam, agg 같은 키값은 타입 제약이 걸려 입력 오류를 낸다
 */
// console.log(
//     pick(obj, ['nam', 'age'])
// )

CalcAreaTest();

// 타입 가드
TypeGuard();

// F바운드 다형성
const value = (new Calculator(1)).add(2).value(); 
console.log(value); // 3
