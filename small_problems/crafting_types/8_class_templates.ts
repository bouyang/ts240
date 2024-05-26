class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  describe(): string {
    return `${this.name} and ${this.age}`;
  }
}

const person = new Person("Alice", 30);
console.log(person.describe());
// Expected Output:
// Alice is 30 years old.