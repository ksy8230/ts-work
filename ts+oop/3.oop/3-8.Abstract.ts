{
    /**
     * 다형성
     */
 
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        sugar?: boolean;
    }

 
    interface CoffeMaker {
        makeCoffee(shots:number):CoffeeCup;
    }

    // 부모 클래스인 커피 머신
    /**
     * abstract을 붙이면 이 클래스로는 인스턴스를 만들 수 없다
     */
    abstract class CoffeeMachine implements CoffeMaker {
        private static BEANS_GRAMM_PER_SHOT = 7;
        private coffeeBeans = 0;

        // 이 클래스를 가지고 인스턴스를 만들 때 항상 호출되는 함수
        public constructor(beans: number) {
            this.coffeeBeans = beans;
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

        // 공통적으로 만들어줘야하는 메서드가 자식에서 달려져야하는 점이 있다면
        // 아래와 같이 사용한다
        protected abstract extract(shots: number): CoffeeCup;

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

        protected extract(shots:number) {
            this.steamMilk();
            return {
                shots: shots,
                hasMilk: true,
            }
        }
    }

    // 자식 클래스인 슈가커피 머신
    class SweetCoffeeMaker extends CoffeeMachine {

        private addSugar() {
            console.log('설탕을 추가한다')
        }

        protected extract(shots:number) {
            this.addSugar();
            return {
                shots: shots,
                sugar: true,
            }
        }
    }

    // const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeeLatterMachine(23, 'e102');
    const sugarMachine = new SweetCoffeeMaker(23);

    const coffee = sugarMachine.makeCoffee(1);

    console.log(coffee);

    const machines: CoffeMaker[] = [
        new CaffeeLatterMachine(16, 'e101'),
        new SweetCoffeeMaker(16),
        new CaffeeLatterMachine(16, 'e101'),
        new SweetCoffeeMaker(16),
    ];

    machines.forEach(machine => {
        console.log('---------');
        machine.makeCoffee(1);
    })
}