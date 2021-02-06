{
    /**
     * 절차지향적 프로그래밍
     */
    
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    const BEANS_GRAMM_PER_SHOT = 7;
    let coffeeBeans = 0;
    function makeCoffee(shots: number): CoffeeCup {
        if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
            throw new Error('커피콩이 부족합니다. 😥')
        }
        coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
        return {
            shots: shots,
            hasMilk: false,
        }
    }

    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee);
}