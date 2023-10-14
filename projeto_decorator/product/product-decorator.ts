import { Sanduiche } from './product-protocol';

export class SanduicheDecorator implements Sanduiche {
  constructor(protected product: Sanduiche) {}

  getName(): string {
    return this.product.getName();
  }

  getPrice(): number {
    return this.product.getPrice();
  }
}
