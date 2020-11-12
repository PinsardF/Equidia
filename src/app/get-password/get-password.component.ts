import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-password',
  templateUrl: './get-password.component.html',
  styleUrls: ['./get-password.component.css']
})
export class GetPasswordComponent implements OnInit {

  emailForm = new FormControl('', [Validators.required, Validators.email]);
  email: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  send() {
    alert('Nouveau mdp sur l\'adresse ' + this.email);
    this.router.navigate(['/connection'])
  }

  getErrorMessage() {
    if (this.emailForm.hasError('required')) {
      return 'Vous n\'avez pas entré d\'adresse mail';
    } else if (this.emailForm.hasError('email')) {
      return 'L\'adresse mail entrée n\'est pas valide';
    }
  }

}
