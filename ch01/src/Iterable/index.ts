import { createRangeIterable } from "../utills/createRangeIterable";

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
}

export default Iterable;
