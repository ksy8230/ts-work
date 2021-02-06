/**
 * 계산기 만들기
 */

/**
 * @param name
 * 계산기의 이름
 * @param fnumber
 * 계산기의 첫번째 숫자
 * @param snumber
 * 계산기의 두번째 숫자
 * 
 * @example
 * ```typescript
 * calculate('add', 2, 1);
 * >>> 4
 * ```
 */

type calculateName = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(name: calculateName, fnumber: number, snumber: number): number {
    /* let result: number = 0;
    if (name === 'add') {
        return result = fnumber + snumber;
    }
    if (name === 'substract') {
        return result = fnumber - snumber;
    }
    if (name === 'multiply') {
        return result = fnumber * snumber;
    }
    if (name === 'divide') {
        return result = fnumber / snumber;
    }
    if (name === 'remainder') {
        return result = fnumber % snumber;
    } */
    switch(name) {
        case 'add':
            return fnumber + snumber;
        case 'substract':
            return fnumber - snumber;
        case 'multiply':
            return fnumber * snumber;
        case 'divide':
            return fnumber / snumber;
        case 'remainder':
            return fnumber % snumber;
        default:
            throw new Error('unknown command');
    }

}

console.log(calculate('add', 1, 3));
console.log(calculate('substract', 3, 1));
console.log(calculate('multiply', 4, 2));
console.log(calculate('divide', 4, 2));
console.log(calculate('remainder', 5, 2));