import {IValuable} from './IValuable'
import {IFunctor} from './IFunctor'

type nullable = undefined | null
const nullable: nullable = undefined

export class None implements IValuable<nullable>, IFunctor<nullable> {
  getOrElse<T>(defaultValue: T | nullable) {
    return defaultValue
  }
  map<U>(fn: (T) =>  U) {
    return new None
  }
}
