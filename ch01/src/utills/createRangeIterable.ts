export const createRangeIterable = (from: number, to: number) => {
    let currentValue = from;
    return {
        next() {
            const value = currentValue < to ? currentValue++ : undefined;
            const done = value == undefined;
            return {value, done}
        }
    }
}

export class RangeIterable {
    constructor(public from: number, public to: number){

    }
    [Symbol.iterator]() {
        const that = this;
        let currentValue = that.from;
        return {
            next() {
                const value = currentValue < that.to ? currentValue++ : undefined;
                const done = value == undefined;
                return {value, done}
            }
        }
    }
}
