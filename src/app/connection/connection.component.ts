import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
 
  loginConnectionForm = new FormControl('', [Validators.required]);
  passwordConnectionForm = new FormControl('', [Validators.required]);
  loginConnection: string;
  passwordConnection: string;
  loginRegister: string;
  passwordRegister: string;
  passwordConfirm: string;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  connect(): void {
    /*
    if(this.loginConnection === undefined) {
      alert("Vous n'avez pas entré de login")
    } else if(this.passwordConnection === undefined) {
      alert("Vous n'avez pas entré de mot de passe")
    } else {
      console.log(this.loginConnectionForm.hasError)
      alert("Connexion avec le login " + this.loginConnection + " et le mdp " + this.passwordConnection)
      this.router.navigate(['/home'])
    }
    */
    alert("Connexion avec le login " + this.loginConnection + " et le mdp " + this.passwordConnection)
    this.router.navigate(['/home'])
  }

  register(): void{
    if(this.loginRegister === undefined) {
      alert("Vous n'avez pas entré de login")
    } else if(this.passwordRegister === undefined) {
      alert("Vous n'avez pas entré de mot de passe")
    } else if(this.passwordConfirm === undefined) {
      alert("Vous n'avez pas confirmé le mot de passe")
    } else if(this.passwordConfirm !== this.passwordRegister) {
      alert("Le mot de passe ne conrrespond pas à la vérification")
    } else if(this.passwordConfirm == this.passwordRegister) {
      alert("Inscription avec le login " + this.loginRegister + " et le mdp " + this.passwordRegister)
    }
  }

  Submit() {
    console.log('Ca marche')
  }

  getErrorMessagelogC() {
    if (this.loginConnectionForm.hasError('required')) {
      return 'Vous n\'avez pas entré de login';
    }
  }
  getErrorMessagepwC() {
    if (this.passwordConnectionForm.hasError('required')) {
      return 'Vous n\'avez pas entré de mot de passe';
    }
    // return this.passwordConnectionForm.hasError('email') ? 'Not a valid email' : '';
  }

}
