{
    /**
     * Type Aliases
     */
    type Text = string;
    const name: Text = 'ellie';

    type Student = {
        name: string,
        age: number
    };

    const student: Student = {
        name: 'ellie',
        age: 12
    };

    /**
     * String Literal Types
     */
    type Name = 'name';
    let myName: Name;
    // myName = 'd'; // 'name'이 아니기 때문에 에러 ❌

}