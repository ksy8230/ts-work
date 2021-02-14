console.log(this); // window

// 브라우저 환경에서는 window가 객체이다

function simple() {
  console.log(this); // window
}

// 글로벌에서 함수를 호출하는 것은
simple();

// window에서 호출하는 것과 동일하다 따라서 this는 window를 가리킨다
window.simple();

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase(); // this는 Counter 클래스

const caller = counter.increase.bind(counter);
caller(); // this는 undefined
// counter의 increase 포인터를 caller에게 할당했기 때문에 this의 정보를 잃게 된다
// let, const 의 정보는 window에 등록이 안 되어 있어서 this는 undefined이다

/**
 * this를 묶어주는 방법
 * 1. -> 바인딩을 시켜준다 counter.increase라는 함수는 counter 오브젝트와 바인딩을 할 거다
 * this는 이제 Counter를 가리킨다
 *
 * 2. -> 클래스 내부에서 this를 클래스에 가리키고 싶은 함수를 arrow function으로 작성한다
 * class Counter {
        count = 0;
        increase = () => {
            console.log(this);
        };
    }
 */

class Bod {}

const bob = new Bod();
bob.run = counter.increase;
bob.run(); // this는 Bod

/**
 * simple과 같이 선언한 함수는 윈도우 객체에 등록이 된다 = 글로벌 객체에서 접근이 가능하다 (window.simple)
 * 하지만 let, const 변수에 선언하게 되면 윈도우에 등록되지 않는다 = 글로벌 객체에서 접근이 불가능하다
 *
 * { } 블락 스코프를 이용해서 작성한 함수나 변수가 아니라 파일의 최상위에서 선언한 변수들은 글로벌에서 바로 호출이 가능하다
 * 변수와 함수 차이: 함수는 기본적으로 글로벌 객체에 등록이 되어서 최상위에서 선언을 해도 글로벌 객체에서도 접근이 가능하다. (window.simple)
 */

/**
 * 예외 var ❌
 * var는 선언하는 순간 글로벌 객체에 등록이 된다
 * -> 호이스팅 (아래에서 선언했는데 상위로 올라가서 선언되는 현상) 문제 뿐만 아니라
 * 이미 선언을 했는데 다른 곳에서 재정의가 가능한 문제가 발생할 수 있다
 */

// var bar = 'bad';
// console.log(window.bar);
