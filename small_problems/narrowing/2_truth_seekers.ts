function isStringArray(arr: unknown[]): arr is string[] {
  return arr.every(element => isString(element));
}

function isString(input: any): boolean {
  return typeof input === 'string';
}

console.log(isStringArray([1, 2, 3]));
console.log(isStringArray(["test", "string"]));