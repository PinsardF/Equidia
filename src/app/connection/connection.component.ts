import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../manage-reprises/manage-reprises.component';
import { UsersService } from '../service';

export interface Test {
  nom: string;
  prenom: string;
  email: string;
  role: string;
  telephone: string;
  galop: number;
  numLicense: number;
  login: string;
  mdp: string;
}

const headers = new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
 
  loginConnectionForm = new FormControl('', [Validators.required]);
  passwordConnectionForm = new FormControl('', [Validators.required]);
  loginRegisterForm = new FormControl('', [Validators.required]);
  passwordRegisterForm = new FormControl('', [Validators.required]);
  passwordRepeatRegisterForm = new FormControl('', [Validators.required]);
  firstNameRegisterForm = new FormControl('', [Validators.required]);
  lastNameRegisterForm = new FormControl('', [Validators.required]);
  phoneRegisterForm = new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]);
  licenseRegisterForm = new FormControl();
  loginConnection: string;
  passwordConnection: string;
  loginRegister: string;
  passwordRegister: string;
  passwordRepeatRegister: string;
  passwordConfirm: string;
  firstNameRegister: string;
  lastNameRegister: string;
  phoneRegister: string;
  licenseRegister: string;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    //let self = this;
    sessionStorage.setItem("role", null);
    /*
    this.http.get("http://localhost:8080/utilisateurs", {headers:headers}).subscribe(function(utilisateurs: Test[]) {
      console.log(utilisateurs);
    });*/
    var test: Test = {nom: "Robert", prenom: "Jean", email: "robert@free.fr", role: "cavalier", telephone: "0123232323",
    galop: 3, numLicense: 10, login: "robert@free.fr", mdp: "mdp"};
    this.http.post("http://localhost:8080/utilisateurs", test, {headers:headers}).subscribe(function(utilisateurs: Test[]) {
      //console.log(utilisateurs);
    });
  }

  connect(): void {
    //REQUEST : SELECT email FROM users WHERE (email = [?] AND password = [?]) OR (email = [?] AND phone = [?])
    //Sinon
    //REQUEST  : SELECT errors FROM users WHERE email = [?] OR phone = [?]
    //errors++;
    //REQUEST : UPDATE users SET errors = [?] WHERE email = [?] OR phone = [?]
    alert("Connexion avec le login " + this.loginConnection + " et le mdp " + this.passwordConnection)
    this.router.navigate(['/reprises'])
    
  }

  register(): void {
    if(this.passwordRegister != this.passwordRepeatRegister) {
      alert("Les mots de passe ne correspondent pas")
    } else {
      //REQUEST : INSERT INTO users (email, first_name, last_name, password, phone, license, errors) VALUES ()
      //avec errors = 0  
      alert("Inscription avec le login " + this.loginRegister + ", le mdp " + this.passwordRegister + ", le prénom "
      + this.firstNameRegister + ", le nom " + this.lastNameRegister + ", le téléphone " + this.phoneRegister
      + " et la licence " + this.licenseRegister);
      this.router.navigate(['/reprises']);
    }
  }

  getErrorMessagelogC() {
    if (this.loginConnectionForm.hasError('required')) {
      return 'Vous n\'avez pas entré d\'email';
    }
  }
  
  getErrorMessagepwC() {
    if (this.passwordConnectionForm.hasError('required')) {
      return 'Vous n\'avez pas entré de mot de passe';
    }
  }

  getErrorMessagelogR() {
    if (this.loginRegisterForm.hasError('required')) {
      return 'Vous n\'avez pas entré d\'email';
    }
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

  getErrorMessagefnR() {
    if (this.firstNameRegisterForm.hasError('required')) {
      return 'Vous n\'avez pas entré de prénom';
    }
  }

  getErrorMessagelnR() {
    if (this.lastNameRegisterForm.hasError('required')) {
      return 'Vous n\'avez pas entré de nom de famille';
    }
  }

  getErrorMessagepnR() {
    if(this.phoneRegisterForm.hasError('required')) {
      return 'Vous n\'avez pas entré de numéro de téléphone'
    } else if(this.phoneRegisterForm.hasError('pattern')) {
      return 'Le numéro de téléphone entré n\'est pas valide';
    }
  }

}
