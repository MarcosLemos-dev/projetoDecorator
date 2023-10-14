import { ProductCarneDecorator } from './product/product-carne-decorator';
import {
  ProductCustomizationDecorator,
} from './product/product-customization-decorator';
import { SanduichePadrao } from './product/SanduichePadrao';

const SanduichePadrao01 = new SanduichePadrao();
const Sanduichefrango = new ProductCarneDecorator(SanduichePadrao01);
const customizedTShirt = new ProductCustomizationDecorator(SanduichePadrao01);

console.log(SanduichePadrao01.getPrice(), SanduichePadrao01.getName());
console.log(Sanduichefrango.getPrice(), Sanduichefrango.getName());
console.log(customizedTShirt.getPrice(), customizedTShirt.getName());
