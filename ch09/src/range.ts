import * as R from 'ramda';

const Range = () => {
    const array: number[] = R.range(1, 9 + 1);
    R.tap(n => console.log(n))(array)
}

export default Range;
