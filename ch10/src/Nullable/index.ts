import { IValuable } from './IValuable';
import { IFunctor } from './IFunctor';
import {Option} from './Option';

const Nullable = () => {

    const ParseNumber = (n: string): IFunctor<number> & IValuable<number> => {
        const value = parseInt(n);
        return isNaN(value) ? Option.None : Option.Some(value);
    }

    let result1 = ParseNumber('1') // Some { value: 1 }
                    .getOrElse(0); // Some 클래스의 getOrElse 메서드로 결과값 리턴
    let result2 = ParseNumber('hello') // None {}
                    .getOrElse(0);     // None 클래스의 getOrElse 메서드로 결과값 리턴
                
    console.log(result1);
    console.log(result2);

}

export default Nullable;