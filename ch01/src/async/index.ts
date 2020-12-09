import { readFileSync, readFile } from 'fs';

const Async = () => {

    // 파일을 비동기 방식으로 읽어들이기
    readFile('src/async/test.json', (error: Error | null, buffer: Buffer) => {
        console.log('read package.json...')
        console.log('파일을 비동기 방식으로 읽어들이기', buffer?.toString())
    });
    // Promise와 async/await로 읽어들이기
    const readFilePromise = (filename: string):Promise<string> => {
        return new Promise<string>(
            (resolve: (successValue: string) => void, 
            reject: (any) => void) => {
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
    // async & await 구문
    const asyncTest1 = async () => {
        let value = await 1;
        console.log(value);
        value = await Promise.resolve(1);
        console.log(value);
    }
    const asyncTest2 = async () => {
        let value = await 'hello';
        console.log(value);
        value = await Promise.resolve('hello');
        console.log(value);
    }
    // asyncTest1()
    // asyncTest2()
    console.log('Promise 객체로 사용해 보기')
    asyncTest1().then(() => asyncTest2())

};

export default Async;
