import { SanduicheDecorator } from './product-decorator';

export class ProductCustomizationDecorator extends SanduicheDecorator {
  getName(): string {
    return this.product.getName() + ' (Customizada)';
  }

  getPrice(): number {
    return this.product.getPrice() + 9;
  }
}
