import { IterableUsingGenerator, rangeGenerator } from "../utills/rangeGenerator";

let iterator = rangeGenerator(1, 3+1);

const Generator = () => {
    while(1) {
        const {value, done} = iterator.next();
        if(done) {
            break
        } else {
            console.log(value)
        }
    }

    for(let item of new IterableUsingGenerator([1,2,3]))
    console.log('IterableUsingGenerator', item)
    
}

export default Generator;
