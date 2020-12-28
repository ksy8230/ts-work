import { ISetoid } from "../interfaces/ISetoid";

export class Identity<T> implements ISetoid<T> {
    constructor(private _value: T) {}
    value() {
        return this._value;
    }
    equals<U>(that: U): boolean {
        if(that instanceof Identity) {
            return this.value() === that.value();
        }
        return false;
    }
}
