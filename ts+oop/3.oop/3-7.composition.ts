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

    interface MilkProvider {
        makeMilk(cup: CoffeeCup):CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup:CoffeeCup): CoffeeCup;
    }

    // 싸구려 우유 거품기
    class CheapMilkSteamer implements MilkProvider {
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

    // 고급 우유 거품기
    class FancyMilkSteamer implements MilkProvider {
        private steamMilk():void {
            console.log('고급 우유를 스팀하고 있다 🥛')
        }
        makeMilk(cup: CoffeeCup):CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    // 냉 우유 거품기
    class ColdMilkSteamer implements MilkProvider {
        private steamMilk():void {
            console.log('냉우유를 스팀하고 있다 🥛')
        }
        makeMilk(cup: CoffeeCup):CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class NoMilk implements MilkProvider {
        makeMilk(cup:CoffeeCup):CoffeeCup {
            return cup;
        }
    }

    // 사탕 설탕 제조기
    class CandySugarMixer implements SugarProvider {
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

    // 사탕 설탕 제조기 2
    class SugarMixer implements SugarProvider {
        private getSuger() {
            console.log('진짜 설탕을 가져옵니다 🍥');
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

    class NoSugar implements SugarProvider {
        addSugar(cup:CoffeeCup):CoffeeCup {
            return cup;
        }
    }

    // 부모 클래스인 커피 머신
    class CoffeeMachine implements CoffeMaker {
        private static BEANS_GRAMM_PER_SHOT = 7;
        private coffeeBeans = 0;

        // 이 클래스를 가지고 인스턴스를 만들 때 항상 호출되는 함수
        public constructor(
            beans: number,
            private milk: MilkProvider,
            private sugar: SugarProvider
        ) {
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

        private extract(shots: number): CoffeeCup {
            console.log(`${shots}샷만큼의 커피를 내리고 있다 ☕`);
            return {
                shots: shots,
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            const coffee = this.extract(shots);
            const sugarCoffee = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarCoffee);
        }
    
    }
 
    
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();

    const candySugarMixer = new CandySugarMixer();
    const sugarMixer = new SugarMixer();
    const noSugar = new NoSugar();

    const lattheMachine = new CoffeeMachine(23, fancyMilkMaker, noSugar);
    const sweetMachine = new CoffeeMachine(23, noMilk, sugarMixer);
    const sweetMilkMachine = new CoffeeMachine(23, fancyMilkMaker, sugarMixer);


    const coffee = sweetMilkMachine.makeCoffee(1);
    console.log(coffee)

}