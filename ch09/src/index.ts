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
Assoc(); // test name