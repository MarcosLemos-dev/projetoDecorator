import { Sanduiche } from './product-protocol';

export class SanduichePadrao implements Sanduiche {
  private name = 'misto';
  private price = 9.9;

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
