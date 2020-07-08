import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

//registrar correo
//registrar contraseña

//registrar otros datos

export class userData {
  tipo_usuario: string;
  nombreNegocio?: string;
  nombre: string;
  numero: string;
  direccion: string;
  email: string;
}

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {

  hide = true;
  registryOk = false;

  registry: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\\.[a-zA-Z]{2,4}$')]),
    password: new FormControl('', [Validators.required]),
  });

  userData: FormGroup = new FormGroup({
    tipo: new FormControl('', Validators.required),
    nombreNegocio: new FormControl(''),
    nombre: new FormControl(''),
    numero: new FormControl(''),
    direccion: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\\.[a-zA-Z]{2,4}$')])
  });

  constructor(
    private auth: AngularFireAuth,
    private _af: AngularFirestore,
    private _router: Router,
  ) {

  }

  ngOnInit(): void {
  }

  

  onSubmit() {
    this.auth.createUserWithEmailAndPassword(this.registry.value.email, this.registry.value.password)
      .then(() => {
        this.registryOk = true;
      })
      .catch(error => {
        this.registry.reset();
        throw error
      })
  }

  onSubmitUserData(){
    this._af.collection<userData>('usuario').add(this.userData.value)
    .then(()=> {
      if(this.userData.value.tipo == 'cliente'){
        this._router.navigateByUrl('usuario');
      }else{
        this._router.navigateByUrl('pedidos');
      }
    })
    .catch( error => {
      throw error
    })
  }

}
