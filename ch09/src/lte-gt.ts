import * as R from 'ramda';

const Lte_gt = () => {
    // 수의 크기를 판단하는 서술자
    R.pipe(
        R.filter(R.lte(3)), // x > = 3
        R.filter(R.gt(6 + 1)), // x < 7
        R.tap(a => console.log('수의 크기를 판단하는 서술자', a)) // [ 3, 4, 5, 6 ]
    )(R.range(1, 10 + 1))

    // R.allPass 
    type NumberToBooleanFunc = (number: number) => boolean;
    const selectRange = (min: number, max: number): NumberToBooleanFunc => 
        R.allPass([R.lte(min), R.gt(max)]);
    R.pipe(
        R.filter(selectRange(4, 6 + 1)),
        R.tap(a => console.log('R.allPass', a))
    )(R.range(1, 10 + 1));

    // R.not
    const notRange = (min, max) => R.pipe(selectRange(min, max), R.not);
    R.pipe(
        R.filter(notRange(4, 6 + 1)),
        R.tap(a => console.log(a))
    )(R.range(1, 10 + 1));

    // R.ifElse
    /**
     * R.ifElese (
     * 조건 서술자,
     * true일 때 실행 함수,
     * false일 때 실행 함수
     * )
     */

     const input: number[] = R.range(1, 10 + 1);
     const halfValue = input[input.length / 2];
    // 1 ~ 10까자의 수에서 중간값 6이랑 같거나 큰 수는 1씩 증가, 6보다 작은 수는 1씩 감소
     const subtractOrAdd = R.pipe(
         R.map(
             R.ifElse(
                 R.lte(halfValue),
                 R.inc,
                 R.dec
             )
         ),
         R.tap(a => console.log(a))
     );
     const result = subtractOrAdd(input);
    
};

export default Lte_gt;
