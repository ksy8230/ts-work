import * as R from 'ramda';
import {IPerson, makeRandomIPerson} from './model/person';

const ToPairFromPair = () => {
    const person:IPerson = makeRandomIPerson();
    const pairs:[string, any][] = R.toPairs(person);
    console.log(pairs)

    const rePerson:IPerson = R.fromPairs(pairs) as IPerson; // Type '{ [index: string]: any; }' is missing the following properties from type 'IPerson': name, age
    console.log(rePerson);
}

export default ToPairFromPair;
