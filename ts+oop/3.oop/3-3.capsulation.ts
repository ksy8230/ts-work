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
    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT = 7;
        private coffeeBeans = 0;

        // 이 클래스를 가지고 인스턴스를 만들 때 항상 호출되는 함수
        private constructor(beans: number) {
            this.coffeeBeans = beans;
            this.fillCoffeeBeans(beans); // 커피콩이 -값으로 생성되지 않도록 추가
        }

        static makeMachine(coffeeBeans:number):CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('커피콩이 부족합니다. 😥')
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false,
            }
        }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('- 값을 사용할 수 없습니다. ☹')
            }
            this.coffeeBeans += beans;
        }
    
    }

    // 1. 32개의 커피콩을 넣어준다
    const maker = CoffeeMaker.makeMachine(32);
    
    // 커피콩 추가는 함수를 통해서만 가능하게 하고 싶다면?
    // maker.coffeeBeans = 3;
    // maker.coffeeBeans = -100; // ????? invalid 
    // private : 외부에서 나의 객체를 유효하지 않은 상태를 만들지 않기 위해 설정
    // maker.BEANS_GRAMM_PER_SHOT; // private 멤버변수는 접근 불가능
    maker.fillCoffeeBeans(50);
    console.log(maker)

    // new 생성자를 이용해서 클래스를 생성하는 것을 막고 싶다면 
    // constructor 앞에 private 추가
    // const maker2 = new CoffeeMaker(10);
    const maker2 = CoffeeMaker.makeMachine(10);


    class User {
        // 🤩 getter로 해결
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            if (num < 0) {
                throw new Error('나이는 0보다 작은 경우 설정할 수 없습니다')
            }
            this.internalAge = num;
        }
        // 🤩 생성자에 접근제어 private을 설정하면 바로 멤버변수가 된다 (따로 지정할 필요 없음)
        constructor(private firstName: string, private lastName: string) {
            // this.firstName = firstName;
            // this.lastName = lastName;
            // this.fullName = `${firstName} ${lastName}`; 
            // constructor에서 fullName이 설정되어 lastName이 수정되어도 다시 계산되지 않는다
        }
    }

    const user = new User('steve', 'jobs');
    console.log(user.fullName) // steve jobs
    // user.firstName = 'Ellie';
    console.log(user.fullName); // 여전히 steve jobs 🙄🙄🙄🙄??

    user.age = -1; 
    // getter로 설정한 age는 클래스의 setter로 들어가서 접근제어 변수인 internalAge 값을 유효성 검사를 추가하여 재설정 가능하다
    console.log(user)
}