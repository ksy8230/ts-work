{
  const obj = {
    name: 'sy',
  };
  obj.name; // sy
  obj['name']; // sy

  /**
   * 타입도 인덱스를 기반하여 사용이 가능
   */

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string
  const text: Name = 'hello!!'; // Name 타입을 사용하면 문자열만 타입 지정 가능

  type Gender = Animal['gender']; //  'male' | 'female';

  type Keys = keyof Animal; // Animal에 있는 모든 키들을 타입으로 지정 'name' | 'age' | 'gender'

  type Person = {
    name: string;
    gender: Animal['gender']; // 'male' | 'female'
  };

  const person: Person = {
    name: 'sy',
    gender: 'female', // ✨
  };
}
