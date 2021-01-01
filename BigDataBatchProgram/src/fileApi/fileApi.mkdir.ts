import mkdirp from "mkdirp";
import { fileExists } from "./fileApi.exists"

// mkdirp 패키지로 디렉터리 생성 함수 만들기
export const mkdir = (dirname: string): Promise<string> =>
  new Promise(async (resolve, reject) => {
    const alreadyExists = await fileExists(dirname);
    if (alreadyExists) resolve(dirname)
    else {
      mkdirp(dirname)
        .then(dirname => resolve(dirname)) // 또는 간단하게 .then(resolve)
        .catch(error => reject(error)) // 또는 간단하게 .catch(reject)
    }
  })
