import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Users } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dbPath = '/usuario';
  userRef: AngularFirestoreCollection<Users> = null;
  emailUser:string;

  constructor(private _af: AngularFirestore) { 
    this.emailUser = localStorage.getItem('email');
    this.userRef = _af.collection(this.dbPath, ref => ref
      .where('email', '==', this.emailUser ));
  }

  getDataUser():AngularFirestoreCollection<Users>{
    return this.userRef;
  }
}
