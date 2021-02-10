type Student = {
  passed: boolean;
};

const students: Student[] = [
  { passed: true },
  { passed: false },
  { passed: true },
];

// every는 함수값이 전부 true일 때 true를 반환
const result = students.every((student) => student.passed);
// console.log(result); ->false

class Animal {}
class Rabbit extends Animal {
  isRabbit = true;
}

class Dog extends Animal {
  isDog = true;
}

const animals: Animal[] = [new Rabbit(), new Rabbit(), new Rabbit()];

function isRabbit(animal: Animal): animal is Rabbit {
  return (animal as Rabbit).isRabbit !== undefined;
}

console.log(animals.every<Rabbit>(isRabbit)); // false
