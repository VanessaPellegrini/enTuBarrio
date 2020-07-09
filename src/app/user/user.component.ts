import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '../model/product.model';
import { map } from 'rxjs/operators';
import { FormGroup, Validators, FormControl } from '@angular/forms';

//TODO arreglar item carrito


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  currentYear = new Date().getFullYear();
  products: any;
  userName: any;

  cantidad : FormGroup = new FormGroup({
    itemCantidad: new FormControl('', [Validators.required])
  });

  constructor(
    private _router: Router,
    public auth: AngularFireAuth,
    public _af: AngularFirestore
  ) {
    this.userName = localStorage.getItem('nombre');
    console.log(this.userName);

  }

  ngOnInit(): void {
    this.getProductList();
    console.log(this.products);

  }

  onSubmit(){

  }

  getProductList() {
    this._af.collection<Product>('producto').snapshotChanges().pipe(
      map(changes =>
        changes.map(
          c => ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        ))
    ).subscribe(product => {
      this.products = product;
    })
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
