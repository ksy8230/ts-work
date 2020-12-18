import { Dump } from "./dump";
import Range from "./range";
import {Add_Subtract_Multiply_Divide} from "./add";
import Lte_gt from "./lte-gt";
import Trim_tolowe_split_toCamelCase from "./trim_tolowe_split_toCamelCase";

Range();
Dump();
Add_Subtract_Multiply_Divide();
Lte_gt();
Trim_tolowe_split_toCamelCase();

import {ICoordinates, makeRandomICoordinates} from './model/coordinates';
import {ILocation, makeRandomILocation} from './model/location';
import {IPerson, makeRandomIPerson} from './model/person';
import Assoc from "./Lens/assoc";

const coordinates: ICoordinates = makeRandomICoordinates();
console.log(coordinates);

const location: ILocation = makeRandomILocation();
console.log(location);

const person: IPerson = makeRandomIPerson();
console.log(person);

// Lens
import * as R from 'ramda';
import {makeLens, getter, setter, setterUsingFunc} from './Lens/lens';
import ToPairFromPair from "./toPairFromPair";
import KeysValuesZipObj from "./KeysValuesZipObj";
import Ramda_array from "./Ramda_array";

const nameLens = makeLens('name');
const getName = getter(nameLens);
const setName = setter(nameLens);
const setNameUsingFunc = setterUsingFunc(nameLens);
console.log(getName)

const person2: IPerson = makeRandomIPerson();
const name = getName(person2);
console.log(name) //
const newPerson = setName('test person name')(person);
console.log(newPerson);
const anotherPerson = setNameUsingFunc(name => `Mr. ${name}`)(person);
const capitalPerson = setNameUsingFunc(R.toUpper)(person);
console.log(
    name, getName(newPerson), 
    getName(anotherPerson), 
    getName(capitalPerson)
)

// IPerson 객체의 longitude 속성값을 접근하려면 person.location.coordinates.longitude와 같이
// 접근해야 한다. 이런 중첩 속성을 람다라이브러리에서는 R.lensPath 함수를 사용한다
const longitudeLens = R.lensPath(['location', 'coordinates', 'longitude']);
const getLongitude = getter(longitudeLens);
const setLongitude = setter(longitudeLens);
const newPersonWithLongitude = setLongitude(0.12143)(person);
console.log(
    getLongitude(newPersonWithLongitude), 
    newPersonWithLongitude
)

ToPairFromPair();
KeysValuesZipObj();

Ramda_array();
