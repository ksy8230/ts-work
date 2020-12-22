import { IValuable } from "./IValueable";
// IValuable<T>를 구현하는 제네릭 클래스
export class Valuable<T> implements IValuable<T> {
    constructor(public value: T) {}
}

export {IValuable};
