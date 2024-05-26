function logUnknown(input: unknown): void {
  if (typeof input === 'string') {
    console.log(input);
  }
}