interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Sample Product",
    price: 49.99,
    description: "A sample product for demonstration",
  },
];

function updateProduct(
  productId: number,
  updatedValues: Partial<Product>
): void {
  for (let i = 0; i < products.length; i += 1) {
    if (products[i].id === productId) {
      products[i] = {...products[i], ...updatedValues};
    } else {
      console.log('Product not found');
    }
  }
}

updateProduct(1, {
  name: "Updated Product Name",
  price: 99.99,
});

console.log(products[0]);