{
    // Array
    const fruits: string[] = ['사과', '바나나'];
    const scroes: Array<number> = [1, 2];

    function printArray(fruits: readonly string[]) {
        // fruits.push ❌
        // readonly를 지정하면 해당 변수를 읽기만 가능해서 에러가 난다
    }

    // Tuple -> interface, type alias, class에 주로 사용한다
    // 튜플 사용은 권장하지 않는다
    // 대신 object를 사용한다
    let students: [string, number];
    students = ['name', 123];
    students[0]; // name
    students[1]; // 123

    const [name, age] = students;
}