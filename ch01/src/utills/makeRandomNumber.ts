let MAX_AGE = 100

export function makeRandomNumber(max: number = MAX_AGE): number {
    return Math.ceil((Math.random() * max))
}

// 컴파일러가 T의 의미를 알아야 하므로 타입지정 <T>을 해준다
export const arrayLength = <T>(array: T[]): number => array.length;
export const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) == 0;

// 배열의 sort 메서드를 순수함수로 구현
export const pureSort = <T>(array: readonly T[]): T[] => {
    let deepCopied = [...array];
    return deepCopied.sort();
}
