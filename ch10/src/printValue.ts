import { IValuable, Valuable } from "./Valuable";
// 제네릭 함수는 다음처럼 자신의 타입 변수 T를  제네릭 인터페이스 타입변수 쪽으로 넘기기 가능
export const printValue = <T>(o: IValuable<T>): void => console.log(o.value);
export {IValuable, Valuable};
