const x = {};
const y = {};
console.log(x);
console.log(x.__proto__ === y.__proto__); // true

const array = [];
console.log(array);

function CoffeeMachine(beans) {
  this.beans = beans;
  // 인스턴스 레벨
  /*this.makeCoffee = (shots) => {
    console.log('making...☕');
  };*/
}
console.clear();

// 프로토타입 레벨 <- 다른 인스턴스들이 상속 받을 수 있도록 프로토타입 레벨에서 작성
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log('making...☕');
};

const machine1 = new CoffeeMachine(10);

console.log(machine1);

function LatterMachine(milk) {
  this.milk = milk;
}

// CoffeeMachine의 프로토타입을 새로운 인스턴스의 프로토타입에 지정 (상속 완료)
LatterMachine.prototype = Object.create(CoffeeMachine.prototype);

const latterMachine = new LatterMachine(123);
console.log(latterMachine);

// 상속된 메서드 사용 가능!
latterMachine.makeCoffee(1);

/**
 * 자바스크립트의 모든 object들은 object라는 프로토를 갖고 있다 ✨
 */
