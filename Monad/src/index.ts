import { Identity } from "./classes/Identity";

const one = new Identity(1);
const two = new Identity(2);

const add = x => y => x + y
const id = new Identity(add)

console.log(
    one.equals(two), // false
    one, // Identity { _value: 1 }
    one.value(), // 1
    one.equals(null)
)
// 엔도 펑터 map은 항상 같은 카테고리에 머무르지만
// chain은 머무르고 싶은 카테고리를 스스로 정해야 한다
console.log(
    Identity.of(1).map(value => `this is ${value}`).value(),
    Identity.of(1).chain(value => Identity.of(`this is ${value}`)).value()
  )