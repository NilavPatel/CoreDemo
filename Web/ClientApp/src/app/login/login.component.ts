import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
}) export class LoginComponent {
    loginForm: FormGroup;
    userName: string;
    password: string;

    constructor(fb: FormBuilder) {
        this.loginForm = fb.group({
            usernameFormControl: this.usernameFormControl, passwordFormControl: this.passwordFormControl
        });
    }

    usernameFormControl = new FormControl('', [
        Validators.required
    ]);

    passwordFormControl = new FormControl('', [
        Validators.required
    ]);

    matcher = new MyErrorStateMatcher();

    doLogin() {
        var data = this.loginForm;
        if (!data.valid) {
            alert("Please fill required data.");
            return;
        }
        this.userName = data.value.usernameFormControl;
        this.password = data.value.passwordFormControl;
        alert("Welcome " + this.userName + ".");
    }
}