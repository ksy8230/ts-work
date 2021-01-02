import { rmdir } from "../fileApi/fileApi.rmdir";
import { deleteFile } from "../fileApi/fileApi.deleteFile"

const deleteTest = async(filename:string) => {
    const result = await deleteFile(filename);
    console.log(result);
}

Promise.all([deleteTest('./data/hello.txt'), deleteTest('./data/test.json')])
    .then(s => rmdir('./data'))
    .then(dirname => console.log(`delete ${dirname}`))
    .catch((e:Error) => console.log(e.message))
