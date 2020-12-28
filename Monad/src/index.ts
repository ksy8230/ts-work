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

// 모나드 왼쪽 법칙 테스트
const a = 1;
const f = a => a * 2;
console.log(
    Identity.of(a).chain(f) == f(a)
)
console.log( f(a) ) // 2
console.log( Identity.of(a).chain(f) ) // 2

// 모나드 오른쪽 법칙 테스트
const m = Identity.of(1);

console.log(
    m.chain(Identity.of).equals(m)
)

console.log(m) // Identity { _value: 1 }
console.log(m.chain(Identity.of)) // Identity { _value: 1 }

type IPerson = {name : string, age: number};
const jack = Identity.of(['jack', 32]);
console.log(jack) // Identity { _value: [ 'jack', 32 ] }

console.log('jack', jack
                .map(([name, age]) => ({name, age}))      // Identity { _value: { name: 'jack', age: 32 } }
                .chain((p:IPerson) => Identity.of(p))     // Identity { _value: { name: 'jack', age: 32 } }
                .map(({name, age}) => [name, age])        // Identity { _value: [ 'jack', 32 ] }
                .value()[0] == jack.value()[0]         // true
            )
