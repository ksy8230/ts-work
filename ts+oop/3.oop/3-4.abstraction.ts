{
    /**
     * 객체지향적 프로그래밍
     * 캡슐화
     * : 외부에서 접근할 수 있는 것과 없는 것을 결정
     */
    
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }


    // public -> 누구나 클래스 내부 접근 가능
    // private -> 누구라도 클래스 내부에 접근 불가능
    // protected -> 상속 받은 자식에서는 내부에 접근 불가능

    interface CoffeMaker {
        makeCoffee(shots:number):CoffeeCup;
    }
    interface CommercialCoffeeMaker {
        makeCoffee(shots: number):CoffeeCup;
        fillCoffeeBeans(beans: number):void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeMaker, CommercialCoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT = 7;
        private coffeeBeans = 0;

        // 이 클래스를 가지고 인스턴스를 만들 때 항상 호출되는 함수
        private constructor(beans: number) {
            this.coffeeBeans = beans;
        }

        static makeMachine(coffeeBeans:number):CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        private grindBeans(shots: number) {
            console.log(`전달해준 ${shots}샷만큼 커피콩을 갈아준다`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('커피콩이 부족합니다. 😥')
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat():void {
            console.log('따뜻하게 만들고 있다 😡');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`${shots}샷만큼의 커피를 내리고 있다 ☕`);
            return {
                shots: shots,
                hasMilk: false,
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('- 값을 사용할 수 없습니다. ☹')
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('기기 청소합니다. 🌈')
        }
    
    }
    class AmateurUser {
        constructor(private machine: CoffeMaker) {}
        makeCoffe() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {}
        makeCoffe() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(40);
            this.machine.clean();
        }
    }
    
    const maker:CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker); // CoffeMaker 인터페이스 범위 사용 가능
    const pro = new ProBarista(maker); // CommercialCoffeeMaker 인터페이스 범위 사용 가능
    // amateur.makeCoffe();
    pro.makeCoffe();

}