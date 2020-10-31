import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  firstNameForm = new FormControl('', [Validators.required]);
  lastNameForm = new FormControl('', [Validators.required]);
  emailForm = new FormControl('', [Validators.required, Validators.email]);
  phoneForm = new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]);
  licenseForm = new FormControl('');

  first_name = "";
  last_name = "";
  email = "";
  phone = "";
  license_number = "";

  constructor() { }

  ngOnInit(): void {
    this.first_name = "Eric";
    this.last_name = "Dubois";
    this.email = "ericdubois@gmail.com";
    this.phone = "0158744472";
    this.license_number = "";
  }

  getErrorMessageFirstName() {
    if (this.firstNameForm.hasError('required')) {
      return 'Vous n\'avez pas entré de prénom';
    }
  }

  getErrorMessageLastName() {
    if (this.lastNameForm.hasError('required')) {
      return 'Vous n\'avez pas entré de nom de famille';
    }
  }

  getErrorMessageEmail() {
    if (this.emailForm.hasError('required')) {
      return 'Vous n\'avez pas entré d\'email';
    }
    return this.emailForm.hasError('email') ? 'L\'email entré n\'est pas valide' : '';
  }

  getErrorMessagePhone() {
    if (this.phoneForm.hasError('required')) {
      return 'Vous n\'avez pas entré de numéro de téléphone';
    } else if(this.phoneForm.hasError('pattern')) {
      return 'Le numéro de téléphone n\'est pas valide';
    }
  }

  validate() {
    alert("Le compte possède maintenant le prénom " + this.first_name + ", le nom " + this.last_name + ", l'email " + 
    this.email + ", le numéro de téléphone " + this.phone + " et le numéro de licence " + this.license_number);
  }

}
