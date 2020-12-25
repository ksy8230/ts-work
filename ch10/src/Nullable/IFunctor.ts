// 함수형 프로그래밍에서 map이라는 메서드가 있는 타입을 펑터라 부른다
export interface IFunctor<T> {
    map<U>(fn: (value: T) => U)
}
