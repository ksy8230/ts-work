import { fileExists } from "./fileApi.exists"
import * as fs from 'fs';

export const deleteFile = (filename: string) => new Promise(async(resolve, reject) => {
    const alreayExists = await fileExists(filename);
    !alreayExists ? resolve(filename) : fs.unlink(filename, (error) => error ? reject(error) : resolve(filename))
})
