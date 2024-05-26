function greet(name = "World"): any {
  return name;
}

console.log(greet()); // Output: Hello, World!
console.log(greet("Pete")); // Output: Hello, Pete!
console.log(greet(2));