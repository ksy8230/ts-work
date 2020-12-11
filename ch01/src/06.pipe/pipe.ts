export const pipe = <T>(...functions: readonly Function[]): Function => (x: T): T => {
    const deepCopiedFunctions = [...functions];
    return deepCopiedFunctions.reduce((value, func) => func(value), x);
}