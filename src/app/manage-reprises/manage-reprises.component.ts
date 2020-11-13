import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

/*
export interface User {
  nom: string;
  prenom: string;
  email: string;
  role: string;
  telephone: string;
  numLicense: string;
  galop: string;
  mdp: string;
  utilisateurId: number;
}*/
export interface Horse {
  nom: string;
  galop: string;
  age: string;
  chevalId: number;
}
export interface Participant {
  first_name: string;
  last_name: string;
  id: string;
  chevalId: number;
}
/*
export interface Paire {
  cheval: Horse;
  cavalier: User;
}*/

const headers = new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});

@Component({
  selector: 'app-manage-reprises',
  templateUrl: './manage-reprises.component.html',
  styleUrls: ['./manage-reprises.component.css']
})
export class ManageReprisesComponent implements OnInit {

  role: string;
  sessionId: string;

  horseForm = new FormControl();
  userList: Participant[];
  horseList: Horse[];
  DisplayedColumns: string[] = ['first_name', 'last_name', 'horse'];

  constructor(private router: Router, private http: HttpClient) { }

  async ngOnInit(): Promise<void> {
    this.role = sessionStorage.getItem("role");
    this.sessionId = sessionStorage.getItem("idReprise");
    sessionStorage.setItem("idReprise", null);
    /*
    var participantsResult;
    this.sessionId = "17";
    await this.http.get("http://localhost:8080/reprises/"+this.sessionId+"/participants",{headers:headers})
      .toPromise().then(function(res) {
        //participantsResult = res;
        console.log(res);
      });*/
    //this.userList = participantsResult;
    this.userList = [{first_name: 'Olga', last_name: 'Orville', id: '28', chevalId: 0},
    {first_name: 'Francis', last_name: 'Bacon', id: '29', chevalId: 0},
    {first_name: 'Deborah', last_name: 'Illia', id: '120', chevalId: 0}];
    var chevalResult;
      await this.http.get("http://localhost:8080/chevaux",{headers:headers})
      .toPromise().then(function(res) {
        chevalResult = res;
      });
    this.horseList = chevalResult;
    /*
    var repriseDate;
    await this.http.get("http://localhost:8080/reprises/"+this.sessionId,{headers:headers})
    .toPromise().then(function(res) {
      repriseDate = res[0].date;
    });
    var chevaux;
    await this.http.get("http://localhost:8080/chevaux/disponibles/"+repriseDate,{headers:headers})
    .toPromise().then(function(res) {
      chevaux = res;
    });
    this.horseList = chevaux;
    */
  }

  validateLesson() {
    var tousAffectes = true;
    for(var i=0;i<this.userList.length;i++) {
      if (this.userList[i].chevalId == 0) {
        tousAffectes = false;
      }
    }
    if (!tousAffectes) {
      alert('Vous n\'avez pas affecté un cheval à chaque participant')
    } else {
      this.router.navigate(['/reprises']);
    }
      /*
      var self = this;
      var paire: Paire;
      for (var i=0;i<this.userList.length;i++) {
        paire = {cheval:self.horseList[i],cavalier:self.userList[i]};
        this.http.post("http://localhost:8080/utilisateurs/" + this.sessionId + "/ajouterChevaux", paire, {headers:headers});
      }
      /*
      alert(this.userList[0].first_name + ' a le cheval ' + this.userList[0].horseId + ', ' + this.userList[1].first_name
      + ':' + this.userList[1].horseId + ', ' + this.userList[2].first_name + ':' + this.userList[2].horseId);*/
  }

}
