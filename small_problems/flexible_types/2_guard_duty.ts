function printId(input: number | string): void {
  if (typeof input === 'number') {
    console.log(`Your ID is a ${typeof input}`);
  } else if (typeof input === 'string') {
    console.log(`Your ID is a ${typeof input}`);
  }
}

printId(101);
printId('abc');