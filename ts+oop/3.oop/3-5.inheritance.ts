{
    /**
     * 인터페이스 상속
     */
 
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

 
    interface CoffeMaker {
        makeCoffee(shots:number):CoffeeCup;
    }

    // 부모 클래스인 커피 머신
    class CoffeeMachine implements CoffeMaker {
        private static BEANS_GRAMM_PER_SHOT = 7;
        private coffeeBeans = 0;

        // 이 클래스를 가지고 인스턴스를 만들 때 항상 호출되는 함수
        public constructor(beans: number) {
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
    
    }

    // 자식 클래스인 카페라떼 머신
    class CaffeeLatterMachine extends CoffeeMachine {
        /**
         * 자식에서 생성자를 구현하는 경우 부모의 생성자를 호출해주어야 한다
         * readonly 한번 설정 후 바뀌지 않는 경우 기재
         */
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans)
        }
        private steamMilk() {
            console.log('우유를 스팀하고 있다 🥛')
        }

        makeCoffee(shots: number):CoffeeCup {
            const coffee = super.makeCoffee(shots); // ✔ 부모 클래스에 있는 함수를 접근하거나 호출 가능하다
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true
            }
        }
    }

    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeeLatterMachine(23, 'e102');

    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    console.log(latteMachine.serialNumber); 
}