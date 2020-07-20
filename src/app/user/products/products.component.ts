import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProducts() {
    this.productService.getProductList().snapshotChanges().pipe(
      map(changes =>
        changes.map(
          c => ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        ))
    ).subscribe(product => {
      this.products = product;
    })
  }

}
