import * as R from 'ramda';
import {IPerson, makeRandomIPerson} from '../model/person';

const Assoc = () => {
    const getName = R.pipe(R.prop('name'), R.tap(name => console.log(name)));
    const person:IPerson = makeRandomIPerson();
    const originalName = getName(person); // 원래 이름 속성값
    
    const modifiedPerson = R.assoc('name', 'test name')(person);
    const modifiedName = getName(modifiedPerson);
    
    return modifiedName;
}

export default Assoc;