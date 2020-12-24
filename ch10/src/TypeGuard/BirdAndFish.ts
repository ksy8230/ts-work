class Bird {fly() {console.log('i am flying')}}
class Fish {swim() {console.log('i am swimming')}}

// is 연산자를 활용한 사용자 정의 타입 가드 함수 제작
const isFlyable = (o : Bird | Fish): o is Bird => {
    return o instanceof Bird;
}
const isSwimable = (o : Bird | Fish): o is Fish => {
    return o instanceof Fish;
}

const TypeGuard = () => {
    const flyOrSwim = (o : Bird | Fish) : void => {
        if(o instanceof Bird) {
            o.fly() // o as Bird를 해주지 않아도 타입을 변환하지 않은 코드 때문에 프로그램이 비정상 종료되는 상황을 막아줌
        } else if (o instanceof Fish) {
            o.swim()
        }
    }

    // test code 1
    [new Bird, new Fish].forEach(flyOrSwim);

    const swinOrfly = (o: Bird | Fish) => {
        if(isFlyable(o)) { // 사용자 정의 타입 가드 함수는 if문에서 사용해야 한다
            o.fly()
        } else if(isSwimable(o)) {
            o.swim()
        }
    }

    // test code 2
    [new Bird, new Fish].forEach(swinOrfly);

}

export default TypeGuard;
