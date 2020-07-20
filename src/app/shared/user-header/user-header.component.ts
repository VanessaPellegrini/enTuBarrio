import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
  total$: Observable<number>;

  constructor(
    private _router: Router,
    public auth: AngularFireAuth,
    private cartService: CartService
  ) {
    this.total$ = this.cartService.cart$.pipe(
      map(products => products.length)
    )
  }

  ngOnInit(): void {
  }

  logOut() {
    this._router.navigateByUrl('');
    this.auth.signOut()
      .then(() => localStorage.clear())
      //TODO arreglar bug observable
      .then(() => window.location.reload())
      .catch((err) => {
        throw (err)
      });
  }

}
