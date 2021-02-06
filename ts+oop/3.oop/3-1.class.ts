{
    /**
     * 객체지향적 프로그래밍
     */
    
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoggeeMaker {
        static BEANS_GRAMM_PER_SHOT = 7;
        coffeeBeans = 0;

        // 이 클래스를 가지고 인스턴스를 만들 때 항상 호출되는 함수
        constructor(beans: number) {
            // 2. 32개의 커피콩은 이 클래스의 coffeeBeas에 들어온다
            this.coffeeBeans = beans;
        }

        static makeMachine(coffeeBeans:number):CoggeeMaker {
            return new CoggeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoggeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('커피콩이 부족합니다. 😥')
            }
            this.coffeeBeans -= shots * CoggeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false,
            }
        }
    
    }

    // 1. 32개의 커피콩을 넣어준다
    const maker = new CoggeeMaker(32);
    console.log(maker);

    const maker2 = new CoggeeMaker(14);
    console.log(maker2);

    // 인스턴스를 만들 때마다 멤버변수들이 생성되어 메모리 낭비를 유발한다
    // 따라서 클래스의 내부 멤버변수 앞에 static을 붙임으로서 클래스 레벨로 만들어준다
    // -> 👀 클래스 내부에서 멤버변수를 사용할 때는 해당 클래스를 붙여줌으로서 사용한다

    // 클래스 레벨에서 함수 사용하면 아래와 같이 바로 클래스를 사용 가능하다 👍
    const maker3 = CoggeeMaker.makeMachine(3)


}