enum Size {
  'small',
  'medium',
  'large'
}

export class Pizza {
  static defaultPrice: number = 100;
  static defaultSize: Size = Size.medium;

  price: number;
  size: Size;

  constructor(price = Pizza.defaultPrice, size: Size = Pizza.defaultSize) {
    this.price = price;
    this.size = size;
  }

  getPrice(): number {
    return this.price;
  }
}

const Decorator = (pizza: Pizza, size: string) => {
  switch (size) {
    case 'small': {
      pizza.price *= 0.7
      pizza.size = Size.small
      break;
    }
    case 'large': {
      pizza.price *= 1.3
      pizza.size = Size.large
      break;
    }
    default: {
      pizza.size = Size.medium
    }
  }
}

export default Decorator;
