import {IValuable} from './IValuable'
import {IFunctor} from './IFunctor'

export class Some<T> implements IValuable<T>, IFunctor<T> {
  constructor(private value: T) {}
  // some 클래스 사용자는 항상 getOrElse 메서드를 통해 some 클래스에 담긴 값을 얻어야 한다
  getOrElse(defaultValue: T) {
    return this.value ?? defaultValue
  }
  // some 클래스 사용자는 value를 변경하려면 항상 map 메서드를 사용해야 한다
  map<U>(fn: (T) =>  U) {
    return new Some<U>(fn(this.value))
  }
}