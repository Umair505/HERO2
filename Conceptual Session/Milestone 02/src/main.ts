import { DigitalProduct } from "./models/DigitalProduct";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { Product } from "./models/Product";

// const sampleProduct = new Product(1,"Demo product",20,50);
// console.log(sampleProduct.getDetails())
// const digitalProduct = new DigitalProduct(1,"Demo product",20,50,100);
// console.log(digitalProduct.getDownloadInfo());

const sampleProduct = new Product(1,"Demo product",20,50);

// console.log(sampleProduct.getDetails());
// console.log(sampleProduct.sell(10))
// console.log(sampleProduct.getDetails());
// console.log(sampleProduct.sell(210))
// console.log(sampleProduct.getDetails());

const sampleProduct2 = new PhysicalProduct(1,"Demo product",20,50);

console.log(sampleProduct.getStockValue())
console.log(sampleProduct2.getStockValue())
console.log(sampleProduct.sell(2))