import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  //Commentaire
  loginConnection: string;
  passwordConnection: string;
  loginRegister: string;
  passwordRegister: string;
  passwordConfirm: string;

  constructor() { }

  ngOnInit(): void {
  }

  connect(): void {
    if(this.loginConnection === undefined) {
      alert("Vous n'avez pas entré de login")
    } else if(this.passwordConnection === undefined) {
      alert("Vous n'avez pas entré de mot de passe")
    } else {
      alert("Connexion avec le login " + this.loginConnection + " et le mdp " + this.passwordConnection)
    }
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

}
