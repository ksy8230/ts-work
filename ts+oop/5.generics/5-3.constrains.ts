interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time`);
  }

  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time`);
  }

  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 좋지 않다
function pay(employee: Employee): Employee {
  employee.pay();
  return employee;
}

/**
 * T라는 제네릭 타입이 너무 일반적이라 pay라는 함수를 읽지 못하니
 * T extends Employee와 같이 일반적인 것에 제한적인 범위를 부여한다!
 */
function pay2<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();

ellie.workFullTime();
bob.workPartTime();

const eliieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

// eliieAfterPay.workFullTime() -> 클래스 기능을 받아오지 못해서 workFullTime 사용 불가능!

const eliieAfterPay2 = pay2(ellie);
eliieAfterPay2.workFullTime();

////

const obj = {
  name: 'ellie',
  age: 20,
};

const obj2 = {
  animal: '❤',
};

/**
 *
 * @param obj : 어떤 T라는 타입을 갖고
 * @param key : 어떤 K라는 타입을 갖는다
 *
 * 다만 K는 아무 타입이 아니라 T의 키 타입에만 한정시킨다
 * 그리고 리턴값도 아무 타입이 아니라 T[K] 타입이다 👍
 */
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, 'name')); // 'ellie'
console.log(getValue(obj2, 'animal')); // '❤'
