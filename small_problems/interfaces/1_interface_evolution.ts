interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

let me: Employee = {
  name: 'Brian',
  age: 34,
  employeeId: 123,
}