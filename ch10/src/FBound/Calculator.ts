import { IAddable } from "./IAddable";
import { IValueProvider } from "./IValueProvider";

export class Calculator implements IValueProvider<number>, IAddable<number> {
    constructor(private _value: number = 0) {}
    value(): number {return this._value}
    // add 메서드는 클래스의 this 값을 반환 = 메세드 체인 기능 구현
    add(value: number): this {
        this._value = this._value + value;
        return this;
    }
}
