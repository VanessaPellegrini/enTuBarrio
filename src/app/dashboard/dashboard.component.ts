import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private _router:Router,
    public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }
  toStock(){
    this._router.navigateByUrl('stock');
  }

  toOrders(){
    this._router.navigateByUrl('ordenes');
  }


  logOut() {
    this._router.navigateByUrl('');
    this.auth.signOut()
      .then(() => localStorage.clear())
      //TODO arreglar bug observable
      .then( () => window.location.reload())
      .catch((err) => {
        throw(err)
    });
  }

}
