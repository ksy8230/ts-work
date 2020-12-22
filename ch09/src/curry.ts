import * as R from 'ramda';

export const Curry = () => {
    const sum = (...numbers: number[]): number => 
    numbers.reduce((result: number, sum: number) => result + sum, 0);

    const curriedSum = R.curryN(3, sum);
    console.log(
        curriedSum(1)(2)(3)
    )
};
