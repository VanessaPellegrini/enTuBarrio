import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:any;
  currentYear = new Date().getFullYear();

  constructor( private productService:ProductService) {}

  ngOnInit(): void {
    
    this.getProductList();
  }

  getProductList(){
    this.productService.getProductList().snapshotChanges().pipe(
      map(changes => 
        changes.map(
          c => ({key: c.payload.doc.id, ...c.payload.doc.data() })
        ))
    ).subscribe(product => {
      this.products = product
    })
  }

  deleteProduct() {
    this.productService.deleteAll();
  }

}
