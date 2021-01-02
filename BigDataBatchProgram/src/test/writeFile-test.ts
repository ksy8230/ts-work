import { mkdir } from "../fileApi/fileApi.mkdir";
import { writeFile } from "../fileApi/fileApi.writeFile"

const writeTest = async(filename:string, data:any) => {
    const result = await writeFile(filename, data);
    console.log(result, filename)
};

mkdir('./data')
    .then(s => writeTest('./data/hello.txt', 'hello world'))
    .then(s => writeTest('./data/test.json', JSON.stringify({name: 'jack', age: 32}, null, 2)))
    .catch((e:Error) => console.log(e));
