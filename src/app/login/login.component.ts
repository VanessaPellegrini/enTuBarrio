import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { SnackBarService } from '../services/local/snack-bar.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../shared/modal/modal.component';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    userSuscription$;

    loginValidateForm: FormGroup;
    email: FormControl;
    password: FormControl;
    statusError: boolean;
    hide = true;

    emailVacio: boolean = false;

    titleModal: string;
    messageModal: string;
    icon: string;
    iconColor: string;

    constructor(
        private _router: Router,
        private auth: AngularFireAuth,
        public _snack: SnackBarService,
        public dialog: MatDialog,
    ) {
        this.email = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\\.[a-zA-Z]{2,4}$')]);
        this.password = new FormControl('', [Validators.required]);
    }

    ngOnInit() {
        this.loginValidateForm = new FormGroup({
            email: this.email,
            password: this.password
        });
    }

    onSubmit() {
        this.signIn(this.email.value.toLowerCase(), this.password.value);
    }

    signIn(email: string, pass: string) {
        this.auth
            .signInWithEmailAndPassword(email, pass)
            .then(res => {
                console.log(res);
                this._router.navigateByUrl('pedidos');
            })
            .catch(error => {
                throw error
                //this._loaderService.display(false);
                //this.openDialog('datosInvalidos');
            }
        );
    }



    resetPassword() {
        if (this.email.value) {
            this.auth.sendPasswordResetEmail(this.email.value.toLowerCase()).then(
                () => this._snack.openSnackBar('Te hemos enviado un correo a tu email registrado, por favor cambia tu contraseña')
            ).catch((err) => {
                if (err.code === 'auth/too-many-requests') {
                    this.openDialog('too-many-requests');
                } else {
                    this.openDialog('errorEnvio');
                }
            });
        } else {
            this.emailVacio = true;
        }
    }

    toRegistry() {
        this._router.navigateByUrl('registro');
    }

    async openDialog(msgType: string) {
        if (msgType === 'datosInvalidos') {
            this.iconColor = 'warn';
            this.icon = 'error_outline';
            this.titleModal = 'Los datos ingresados son incorrectos.';
            this.messageModal = 'Si has ingresado tu contraseña muchas veces, es posible que se haya bloqueado el acceso. Por favor recuper tu contraseña.';
        }
        if (msgType === 'errorEnvio') {
            this.iconColor = 'warn';
            this.icon = 'error_outline';
            this.titleModal = 'Error al enviar correo.';
            this.messageModal = 'Es posible que tus datos no se encuentren registrados en nuestro sistema.';
        }
        if (msgType === 'too-many-requests') {
            this.iconColor = 'warn';
            this.icon = 'error_outline';
            this.titleModal = 'Error al enviar correo.';
            this.messageModal = 'Hemos bloqueado todas las solicitudes de este dispositivo debido a una actividad inusual. Intenta nuevamente más tarde.';
        }
        this.dialog.open(ModalComponent, {
            width: '250px',
            data: { title: this.titleModal, message: this.messageModal, icon: this.icon, colorIcon: this.iconColor }
        });
    }

}
