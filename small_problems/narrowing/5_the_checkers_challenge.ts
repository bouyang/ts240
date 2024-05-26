function assertNever(input: never): never {
  throw new Error(input);
}

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === 'square') {
    return shape.sideLength ** 2;
  } else {
    return assertNever(shape);
  }
}