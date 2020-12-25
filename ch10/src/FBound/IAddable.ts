// add 메서드가 내가 아닌 나를 상속하는 타입을 반환하는 F-바운드 타입
export interface IAddable<T> {
    add(value: T): this
}
