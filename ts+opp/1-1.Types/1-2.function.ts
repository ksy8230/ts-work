{
    // 기본 사용 방식
    /*
    function fetchNum(id: string): Promise<number> {
        return new Promise((resolve, reject) => {
            resolve(100)
        })
    }
    */

    // Javascript => Typescript
    // Optional parameter
    // 전달해도 되고 전달하지 않아도 되는 경우
    function printName(fname:string, lname?:string) {
        console.log(fname)
        console.log(lname)
    }
    printName('sy', 'kim')
    printName('hee') // ❤ 에러가 나지 않는다

    // 파라미터에 기본값 지정하기
    function printMsg(msg: string = 'default msg') {
        console.log(msg)
    }
    printMsg()

    // rest 파라미터
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a,b) => a+b);
    }
    console.log(addNumbers(1,2))
    console.log(addNumbers(1,2,3))
    console.log(addNumbers(1,2,3,4))
}