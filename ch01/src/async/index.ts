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
    // async 함수와 Promise.all
    const readFilesAll = async (filename: string[]) => {
        return await Promise.all(
            filename.map(v => readFilePromise(v))
        )
    };
    readFilesAll(['src/async/test.json', 'src/async/test2.json'])
    .then(([file1, file2]: string[]) => {
        console.log('file 1', file1)
        console.log('file 2', file2)
    })
    .catch(error => console.log(error))

};

export default Async;
