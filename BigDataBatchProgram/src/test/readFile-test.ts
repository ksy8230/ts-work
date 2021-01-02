import { readFile } from "../fileApi/fileApi.readFile";


const readTest = async(filename:string) => {
    const result = await readFile(filename);
    console.log(result);
}

readTest('./data/hello.txt')
    .then(s => readTest('./data/test.json'))
    .catch((e:Error) => console.log(e.message))
