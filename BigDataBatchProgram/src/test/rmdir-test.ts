import { rmdir } from "../fileApi/fileApi.rmdir"

const deleteDataDir = async(dir) => {
    const result = await rmdir(dir);
    console.log(result + 'dir deleted');
}

deleteDataDir('./data/today');
