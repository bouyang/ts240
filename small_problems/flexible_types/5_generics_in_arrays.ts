function filterByType<T>(input: Array<any>, type: string): Array<T> {
  return input.filter(element => (typeof element === type));
}

console.log(filterByType<string>(["hello", "world", 42, true], "string"));