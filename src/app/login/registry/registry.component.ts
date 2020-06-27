import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {

  hide = true;

  registry: FormGroup = new FormGroup({
    nombreNegocio: new FormControl(''),
    nombre: new FormControl(''),
    numero: new FormControl(''),
    direccion: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\\.[a-zA-Z]{2,4}$')]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private auth: AngularFireAuth,
  ) {

   }

  ngOnInit(): void {

  }

  onSubmit(){

  }

}
