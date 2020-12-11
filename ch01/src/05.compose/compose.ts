﻿export const compose = <T>(...functions: readonly Function[]): Function => (x:T): T => {
    const deepCopiedFunctions = [...functions];
    return deepCopiedFunctions.reverse().reduce((value, func) => func(value), x);
}
// compose 에서 (...functions: readonly Function[]): Function 부분이 해소된 1차 함수가 됩니다. 즉
// composeFGH는 <T>(x:T): T => {...} 형태의 1차함수입니다.
