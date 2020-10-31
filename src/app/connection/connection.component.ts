import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
 
  loginConnectionForm = new FormControl('', [Validators.required, Validators.email]);
  passwordConnectionForm = new FormControl('', [Validators.required]);
  loginRegisterForm = new FormControl('', [Validators.required, Validators.email]);
  passwordRegisterForm = new FormControl('', [Validators.required]);
  passwordRepeatRegisterForm = new FormControl('', [Validators.required]);
  loginConnection: string;
  passwordConnection: string;
  loginRegister: string;
  passwordRegister: string;
  passwordRepeatRegister: string;
  passwordConfirm: string;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  connect(): void {
    alert("Connexion avec le login " + this.loginConnection + " et le mdp " + this.passwordConnection)
    this.router.navigate(['/home'])
  }

  register(): void {
    if(this.passwordRegister != this.passwordRepeatRegister) {
      alert("Les mots de passe ne correspondent pas")
    } else {
      alert("Inscription avec le login " + this.loginRegister + " et le mdp " + this.passwordRegister)
      this.router.navigate(['/home'])
    }
  }

  getErrorMessagelogC() {
    if (this.loginConnectionForm.hasError('required')) {
      return 'Vous n\'avez pas entré d\'email';
    }
    return this.loginConnectionForm.hasError('email') ? 'L\'email entré n\'est pas valide' : '';
  }
  
  getErrorMessagepwC() {
    if (this.passwordConnectionForm.hasError('required')) {
      return 'Vous n\'avez pas entré de mot de passe';
    }
    // return this.passwordConnectionForm.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagelogR() {
    if (this.loginRegisterForm.hasError('required')) {
      return 'Vous n\'avez pas entré d\'email';
    }
    return this.loginRegisterForm.hasError('email') ? 'L\'email entré n\'est pas valide' : '';
  }
  getErrorMessagepwR() {
    if (this.passwordRegisterForm.hasError('required')) {
      return 'Vous n\'avez pas entré de mot de passe';
    }
  }

  getErrorMessagepwRR() {
    if (this.passwordRepeatRegisterForm.hasError('required')) {
      return 'Vous n\'avez pas entré de mot de passe';
    }
  }

}
