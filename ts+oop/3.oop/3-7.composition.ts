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

    // 싸구려 우유 거품기
    class CheapMilkSteamer {
        private steamMilk():void {
            console.log('우유를 스팀하고 있다 🥛')
        }
        makeMilk(cup: CoffeeCup):CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    // 사탕 설탕 제조기
    class CandySugarMixer {
        private getSuger() {
            console.log('사탕에서 설탕을 가져옵니다 🍥');
            return true;
        }
        addSugar(cup:CoffeeCup): CoffeeCup {
            const sugar = this.getSuger();
            return {
                ...cup,
                sugar: sugar,
            }
        }
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
        constructor(
            beans: number, 
            public readonly serialNumber: string, 
            private milkFother: CheapMilkSteamer
        ) {
            super(beans)
        }
        
        makeCoffee(shots: number):CoffeeCup {
            const coffee = super.makeCoffee(shots); // ✔ 부모 클래스에 있는 함수를 접근하거나 호출 가능하다
            return this.milkFother.makeMilk(coffee);
        }
    }

    // 자식 클래스인 슈가커피 머신
    class SweetCoffeeMachine extends CoffeeMachine {
        constructor(
            beans: number, 
            private sugar: CandySugarMixer
        ) {
            super(beans)
        }

        makeCoffee(shots: number):CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee);
        }
    }

    // 카페라떼(자식)와 슈가커피(자식)를 상속하는 자식 클래스 만드는 법?
    class SweetMilkCoffeeMachine extends CoffeeMachine {
        constructor(
            beans: number, 
            private sugar: CandySugarMixer,
            private milkFother: CheapMilkSteamer
        ) {
            super(beans)
        }
        makeCoffee(shots:number):CoffeeCup {
            const coffee = super.makeCoffee(shots);
            const sugarAddCoffee = this.sugar.addSugar(coffee);
            return this.milkFother.makeMilk(sugarAddCoffee);
        }
    }
    
    const cheapMilkMaker = new CheapMilkSteamer();
    const candySugarMixer = new CandySugarMixer();
    const sweetLatterMachine = new SweetMilkCoffeeMachine(30, candySugarMixer, cheapMilkMaker);
    const coffee = sweetLatterMachine.makeCoffee(1);
    console.log(coffee)
    /**
     * >>
     * 전달해준 1샷만큼 커피콩을 갈아준다
        따뜻하게 만들고 있다 😡
        1샷만큼의 커피를 내리고 있다 ☕
        사탕에서 설탕을 가져옵니다 🍥
        우유를 스팀하고 있다 🥛
        { shots: 1, sugar: true, hasMilk: true }
     */
}