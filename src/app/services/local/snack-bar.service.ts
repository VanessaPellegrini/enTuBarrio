import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor( private _snackBar: MatSnackBar) { }

  openSnackBar(message){
    this._snackBar.open(message, null,{
      duration: 8000
    });
  }
}
