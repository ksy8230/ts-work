import * as R from 'ramda';
import { IPerson, makeRandomIPerson } from './model/person';

const Ramda_array = () => {
    const array:number[] = [3,4];
    // R.prepend, R.append : append, prepend 기능
    const newArray = R.prepend(1)(array);
    const newArray2 = R.append(1)(array);
    console.log(newArray);
    console.log(newArray2);
    // R.flatten : 복잡한 배열을 1차원의 평평한 배열로 변경
    const plexArray = [[[1,1], [1,2], [1,3]]];
    const flattArray = R.flatten(plexArray);
    console.log(flattArray); // [ 1, 1, 1, 2, 1, 3 ]
    // R.sort
    type voidToNumberFunc = () => number;
    const makeRandomNumber = (max: number): voidToNumberFunc => (): number => Math.floor(Math.random() * max);
    const randomArray = R.range(1, 5 + 1).map(makeRandomNumber(100));
    const sortedArray = R.sort((a: number, b:number) => a - b)(randomArray);
    console.log('R.sortBy (오름차순으로만 정렬 가능):', sortedArray)
    // R.sortBy (오름차순으로만 정렬 가능)
    const persons:IPerson[] = R.range(1, 4 + 1).map(makeRandomIPerson);
    const nameSortedPersons = R.sortBy(R.prop('name'))(persons);
    console.log(nameSortedPersons)
    // R.sortWith (R.descend 함수와 함께 내림차순 정렬)
    const nameDescendSortedPersons = R.sortWith([R.descend(R.prop('name'))])(persons);
    console.log(' R.sortWith (R.descend 함수와 함께 내림차순 정렬) : ', nameDescendSortedPersons)

};

export default Ramda_array;