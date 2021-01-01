import { getFileNameAndNumber } from "../utils/utils.get-file.name-Number"

// nodejs에서 프로그램 명령줄 인수 읽기
const [filename, numberOfFakeData] = getFileNameAndNumber('data/fake.csv', 100000);
console.log(filename, numberOfFakeData); // data/faske.csc 100000
