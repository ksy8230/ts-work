import * as fs from 'fs';

export const readFile = (filename:string) => new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (error: Error, data: any) => {
        error ? reject(error) : resolve(data)
    })
});
