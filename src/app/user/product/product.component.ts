import { Component, OnInit, Input, Output,EventEmitter, HostListener } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  showDescription = false;

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  @HostListener('mouseenter') 
  onMouseEnter() {
    this.showDescription=true;
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.showDescription = false;
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addCart() {
    console.log('añadir al carrito');
    this.cartService.addCart(this.product);
    // this.productClicked.emit(this.product.id);
  }

}
