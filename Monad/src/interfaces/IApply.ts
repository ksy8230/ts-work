import {IFunctor} from './IFunctor';

// 어플라이 : 펑터이면서 ap이라는 인스턴스 메서드를 갖는 클래스
export interface IApply<T> extends IFunctor<T> {
    ap<U>(b: U)
}
