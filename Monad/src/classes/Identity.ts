import { IFunctor } from "../interfaces/IFunctor";
import { ISetoid } from "../interfaces/ISetoid";

export class Identity<T> implements ISetoid<T>, IFunctor<T> {
    constructor(private _value: T) {}
    // IValuable
    value() {
        return this._value;
    }
    // ISetoid
    equals<U>(that: U): boolean {
        if(that instanceof Identity) {
            return this.value() === that.value();
        }
        return false;
    }
    // IFunctor
    // 엔도 펑터 : 특정 카테고리에서 출발해도 도착 카테고리는 다시 출발 카테고리가 되는 펑터
    map<U>(fn: (x: T) => U) {
        return new Identity<U>(fn(this.value()))
    }
}
