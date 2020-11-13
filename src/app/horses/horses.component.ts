import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface Horse {
  nom: string;
  galop: string;
  age: string;
  chevalId: number;
}
export interface AddHorse {
  nom: string;
  galop: string;
  age: string;
}

const headers = new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});

@Component({
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.css']
})

export class HorsesComponent implements OnInit {

  role: string;

  horseNameForm = new FormControl('', [Validators.required]);
  horseName: string;
  horseLevelForm = new FormControl('', [Validators.required, Validators.pattern("[1-7]")]);
  horseLevel: string;
  horseAgeForm = new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]);
  horseAge: string;
  horseList: Horse[];
  displayedColumns: string[] = ['nom', 'galop', 'age'];

  constructor(private http: HttpClient) { }

  async ngOnInit(): Promise<void> {
    this.role = sessionStorage.getItem("role");
    this.role = "superadmin";//A SUPPRIMER
    var chevalResult;
      await this.http.get("http://localhost:8080/chevaux",{headers:headers})
      .toPromise().then(function(res) {
        chevalResult = res;
      });
    this.horseList = chevalResult;
  }

  getErrorMessageName() {
    if (this.horseNameForm.hasError('required')) {
      return 'Vous devez entrer un nom'
    }
  }

  getErrorMessageAge() {
    if (this.horseAgeForm.hasError('required')) {
      return 'Vous devez entrer un âge'
    } else if (this.horseAgeForm.hasError('pattern')) {
      return 'L\'âge entré n\'est pas valide';
    }
  }

  getErrorMessageLevel() {
    if (this.horseLevelForm.hasError('required')) {
      return 'Vous devez entrer un niveau'
    } else if (this.horseLevelForm.hasError('pattern')) {
      return 'Le niveau entré n\'est pas valide'
    }
  }

  async addHorse() {
    var newHorse: AddHorse = {nom:this.horseName,galop:this.horseLevel,age:this.horseAge};
    await this.http.post("http://localhost:8080/chevaux/",newHorse,{headers:headers})
    .toPromise();
  }

}
