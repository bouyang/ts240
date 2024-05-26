function printLength(input: string | Array<string>): void {
  if (typeof input === 'string') {
    console.log(`String length: ${input.length}`); 
  } else {
    console.log(`Array count: ${input.length}`);
  }
}

printLength("hello");
printLength(["hello", "world"]);