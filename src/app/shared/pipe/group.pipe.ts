import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Pipe({
  name: 'groupProducts',
})
export class GroupProductsPipe implements PipeTransform {
  groupedProducts: any[] = [];

  transform(value: Product[]): any {
    value.forEach((product) => {
      if (this.groupedProducts.length === 0) {
        this.groupedProducts.push(
          Object.assign(product, { cantidad: 1, amount: product.precio })
        );
      } else {
        const repeatedProduct = this.groupedProducts.findIndex(
          (p) => p.key === product.key
        );
        if (repeatedProduct === -1) {
          this.groupedProducts.push(
            Object.assign(product, { cantidad: 1, amount: product.precio })
          );
        } else {
          this.groupedProducts[repeatedProduct].cantidad++;
          this.groupedProducts[repeatedProduct].total =
            this.groupedProducts[repeatedProduct].cantidad *
            this.groupedProducts[repeatedProduct].precio;
        }
      }
    });

    return this.groupedProducts;
  }
}