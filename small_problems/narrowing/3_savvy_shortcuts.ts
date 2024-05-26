function shortCircuit(input: string | undefined): void {
  input && input !== '' && console.log('input is defined and not empty');
}

shortCircuit('');
shortCircuit('abc');