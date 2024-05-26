interface UserData {
  name: string;
  email: string;
  age: number;
}

type UserDataKeys = keyof UserData;

function printUserDataField(obj: UserData, key: UserDataKeys): unknown {
  return obj[key];
}

const userData: UserData = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

console.log(printUserDataField(userData, "name"));
// Output should be "Alice"
console.log(printUserDataField(userData, "age"));
// Output should be 25