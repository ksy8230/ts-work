export function makePerson(name: string, age: number) {
    return {name: name, age: age}
}

export function testMakePerson() {
    console.log(
        makePerson('amy', 22),
        makePerson('amy2', 30),
    )
}