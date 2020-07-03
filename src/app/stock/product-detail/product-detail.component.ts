import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  updateActive(isActive: boolean) {
    this.productService.updateProduct(this.product.key, {activo:isActive})
    .catch(err => console.log(err));
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.key)
    .catch(err => console.log(err));
  }

}
