import { SanduicheDecorator } from './product-decorator';

export class ProductCarneDecorator extends SanduicheDecorator {
  getName(): string {
    return this.product.getName() + ' (frango)';
  }

  getPrice(): number {
    return this.product.getPrice() + 5;
  }
}
