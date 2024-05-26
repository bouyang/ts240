function wrapInArray(input: string | number): (string | number) [] {
  return [input];
}

console.log(wrapInArray('hello'));