interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(input: Shape): number {
  if (input.kind === 'circle') {
    return Math.PI * input.radius * input.radius;
  } else {
    return input.sideLength * input.sideLength;
  }
}

console.log(getArea({ kind: "circle", radius: 10 }));
console.log(getArea({ kind: "square", sideLength: 10 }));