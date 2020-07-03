import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  submitted = false;


  constructor( private productService:ProductService) { }

  ngOnInit(): void {
  }

  newProduct():void {
    this.submitted = false;
    this.product = new Product();
  }

  save(){
    this.productService.createProduct(this.product);
    this.product = new Product();
  }
  onSubmit(){
    this.submitted = true;
    this.save();
  }

}
