import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = "Dashboard";   
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(private _router: Router,
    public auth: AngularFireAuth,
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
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
