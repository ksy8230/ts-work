import { readFileSync, readFile } from 'fs';
import { reject } from 'ramda';

const Async = () => {

    // 파일을 비동기 방식으로 읽어들이기
    readFile('src/async/test.json', (error: Error | null, buffer: Buffer) => {
        console.log('read package.json...')
        console.log('파일을 비동기 방식으로 읽어들이기', buffer?.toString())
    });
    // Promise와 async/await로 읽어들이기
    const readFilePromise = (filename: string):Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            readFile(filename, (error: Error | null, buffer: Buffer) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(buffer.toString())
                }
            })
        })
    };
    const test = async () => {
        const content = await readFilePromise('src/async/test.json');
        console.log('Promise와 async/await로 읽어들이기', content);
    }
    test();

};

export default Async;
