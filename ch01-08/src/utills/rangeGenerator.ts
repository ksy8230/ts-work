export function* rangeGenerator(from: number, to: number) {
    let value = from;
    while(value < to) {
        yield value++
    }
}

export class IterableUsingGenerator<T> implements Iterable<T>{
    constructor(private values: T[] = [], private currentIndex: number = 0) {

    }
    [Symbol.iterator] = function* (this) {
        while(this.currentIndex < this.values.length) {
            yield this.values[this.currentIndex++]
        }
    }
}
