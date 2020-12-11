import { createRangeIterable, RangeIterable } from "../utills/createRangeIterable";

const Iterable = () => {
    const iterator = createRangeIterable(1, 3 + 1);
    while(true) {
        const {value, done} = iterator.next(); // 반복기 동작
        if (done) {
            break;
        } else {
            console.log(value);
        }
    }

    const iterator2: RangeIterable = new RangeIterable(1, 3 + 1);
    for (let value of iterator2) {
        console.log('RangeIterable', value)
    }
}

export default Iterable;
