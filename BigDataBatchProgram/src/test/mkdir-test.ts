import { mkdir } from "../fileApi/fileApi.mkdir"

const makeDataDir = async(dirname) => {
    let result = await mkdir(dirname);
    console.log(result + 'dir created');
}

makeDataDir('./data/today')
makeDataDir('./data/today2')