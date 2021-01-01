import rimraf from "rimraf";
import { fileExists } from "./fileApi.exists"

// 비어있지 않은 디렉터리도 삭제 가능한 rimraf 패키지를 이용해 디렉터리 삭제 함수 만들기
export const rmdir = (dirname): Promise<string> => 
    new Promise(async(resolve, reject) => {
        const alreadyExists = await fileExists(dirname);
        !alreadyExists ? resolve(dirname) :
        rimraf(dirname, error => error ? reject(error) : resolve(dirname))
    });
