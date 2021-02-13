// const array = new Array(10000000000000000000);

/**
 * Error handling : try -> catch -> finally
 * catch 부분에서 return을 해도 finally 단계에 있는 함수는 실행이 된다
 */

function readFile(fileName: string): string {
  if (fileName === 'not exist') {
    throw new Error(`파일이 존재하지 않습니다. 원인 파일 : ${fileName}`);
  }
  return '파일 내용 출력!';
}

function closeFile(fileName: string) {
  console.log(`${fileName} 파일을 닫습니다`);
}

function run() {
  const fileName = 'not exist';
  try {
    console.log(readFile(fileName));
  } catch {
    console.log(`Error catched! ❌`);
    return;
  } finally {
    closeFile(fileName);
  }
}

run();
