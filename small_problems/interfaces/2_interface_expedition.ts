interface Dog {
  bark(): void;
}

interface Cat {
  meow(): void;
}

interface Pet extends Dog, Cat {};

let pet: Pet = {
  bark: function() {
    console.log('woof');
  },
  meow: function() {
    console.log('meow');
  },
}

pet.bark();
pet.meow();