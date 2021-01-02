import { appendFile } from "../fileApi/fileApi.appendFile"

const appendTest = async(filename:string, data:any) => {
    const result = await appendFile(filename, data);
    console.log(result);
}

appendFile('./data/hello.txt', '\nhi there');
    