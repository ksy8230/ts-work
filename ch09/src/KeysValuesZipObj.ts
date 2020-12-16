import * as R from 'ramda';
import {IPerson, makeRandomIPerson} from './model/person';

const KeysValuesZipObj = () => {
    const keys: string[] = R.keys(makeRandomIPerson());
    const values: any[] = R.values(makeRandomIPerson());
    console.log(keys); // [ 'name', 'age', 'title', 'location' ]
    console.log(values);
    /**
     * [
        'Michael Rodriguez',
        38,
        'Business Analyst',
        {
            country: 'NO',
            city: 'Cawospez',
            address: '47 Haam Ridge',
            coordinates: { latitude: 37.79821, longitude: -31.86625 }
        }
        ]
     */
    const zippedPerson:IPerson = R.zipObj(keys, values) as IPerson;
    console.log(zippedPerson)
    /**
     * {
        name: 'Luella Edwards',
        age: 38,
        title: 'Radiology Manager',
        location: {
                country: 'IS',
                city: 'Zibwelev',
                address: '131 Tubpo Square',
                coordinates: { latitude: -1.32068, longitude: 32.89309 }
            }
        }
     */
}

export default KeysValuesZipObj;