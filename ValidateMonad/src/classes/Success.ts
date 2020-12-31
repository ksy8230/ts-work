import {IFunctor, IApply}from '../interfaces'
import {IValidation} from './IValidation'
/**
 * Success 클래스의 value는 현재 함수이다
 * 따라서 map 함수의 콜백 함수로 사용 가능하다
 */
export class Success<T> implements IValidation<T>, IFunctor<T>, IApply<T> { 
  constructor(public value: T, public isSuccess=true, public isFailure=false) {} 

  // IApplicative
  static of<U>(value: U): Success<U> { 
    console.log('of(value):', value)
    return new Success<U>(value)
  }

  // IFunctor
  map<U>(fn: (x: T) => U) { 
    console.log('map(fn):', fn(this.value))
    console.log('map this.value:', this.value)
    return new Success<U>(fn(this.value)) 
  }
  // IApply
  ap(b) { 
    console.log('ap(b):', b)
    console.log('ap this.value:', this.value)
    return b.isFailure ? b : b.map(this.value) 
  }
}
