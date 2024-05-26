type Device = {
  manufacturer: string;
  model: string;
  year: number;
}

let computer: Device = {
  manufacturer: 'Apple',
  model: 'Macbook',
  year: 2024,
}

let smartphone = {
  manufacturer: 'Apple',
  model: 'iPhone 15',
  year: 2024,
}

let otherPhone: Device = smartphone;