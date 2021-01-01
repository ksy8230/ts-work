import { fileExists } from "../fileApi/fileApi.exists"

// fs.access api로 디렉터리나 파일 확인
const exists = async(filepath) => {
    const result = await fileExists(filepath);
    console.log(result);
}

exists('./package.json') // true