import * as R from 'ramda';

export const Add_Subtract_Multiply_Divide = () => {
    const incNumbers = R.pipe(
        R.map(R.add(1)),
        R.tap(a => console.log('after add(1):', a))
    );
    const newNumbers = incNumbers(R.range(1, 10));

    // R.addIndex 함수
    const addIndex: <T>(array: T[]) => void = R.pipe(
        R.addIndex(R.map)(R.add),
        //R.addIndex(R.map)((value: number, index: number) => R.add(value)(index)),
        R.tap(a => console.log(a)), // [ 1, 3, 5, 7, 9, 11, 13, 15, 17 ]
      );
    const newNumbers2 = addIndex(R.range(1, 9 + 1))

    // R.flip 함수 적용 전
    const subtract = a => b => a - b;
    const subtractFrom10 = subtract(10);
    const newArray = R.pipe(
        R.map(subtractFrom10), // 10 - v
        R.tap(a => console.log(a))
    )(R.range(1, 10))
    // R.flip 함수 적용 후
    const reverseSubtract = R.flip(R.subtract); // R.flip은 R.subtract와 같은 2차 고차함수의 매개변수 순서를 바꿔준다
    const newArray2 = R.pipe(
        R.map(reverseSubtract(10)), // v - 10
        R.tap(a => console.log(a))
    )(R.range(1, 10))

    // 사칙 연산 함수들의 조합
    // f(x) = ax2^ + bx + C
    type NumberToNumberFunc = (number) => number;
    const exp = (N) => x =>  x ** N;
    const square = exp(2);
    const f = (a: number, b: number, c: number): NumberToNumberFunc => (x: number) => 
        R.add(R.add(R.multiply(a)(square(x)))(R.multiply(b)(x)), c);
    

    // x2^ + 2x + 1
    const quadratic = f(1,2,1);
    // quadratic 함수를 사용해 1 ~ 10 수를 변수 x에 대입한 결과
    const quadraticResult = R.pipe(
        R.map(quadratic),
        R.tap(a => console.log(a))
    )(R.range(1, 10));
};
