class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log(`My name is ${this.name}. I'm ${this.age} years old.`);
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age);
  }

  say() {
    console.log(`Bark! ${this.name}`);
  }
}

class Cat extends Animal {
  constructor(name: string, age: number) {
    super(name, age);
  }

  say() {
    console.log(`Meow! ${this.name}`);
  }
}

type TypeAnimal = 'cat' | 'dog';

class AnimalFactory {
  create (type: TypeAnimal, name: string, age: number) {

    switch (type) {
      case 'cat': {
        return new Cat(name, age);
      }
      case 'dog': {
        return new Dog(name, age);
      }
      default: {
        return new Animal(name, age);
      }
    }
  }
}

export default AnimalFactory;
