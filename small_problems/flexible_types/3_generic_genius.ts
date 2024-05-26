function firstElement<T>(input: Array<T>): T | undefined {
  return input[0];
}

console.log(firstElement([7, 9, 11]));
console.log(firstElement([]));