import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

export interface User {
  first_name: string;
  last_name: string;
  id: string;
  horseId: number;
}

export interface Horse {
  name: string;
  id: number;
}

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
  userList: User[];
  horseList: Horse[];
  DisplayedColumns: string[] = ['first_name', 'last_name', 'horse'];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.role = sessionStorage.getItem("role");
    this.role = "admin";//A SUPPRIMER
    this.sessionId = sessionStorage.getItem("idReprise");
    sessionStorage.setItem("idReprise", null);
    /*
    REQUETE A CREER
    OBTENIR LES CAVALIERS A PARTIR DE L'ID DE LA REPRISE
    */
    this.userList = [{first_name: 'Olga', last_name: 'Orville', id: '28', horseId: 0},
    {first_name: 'Francis', last_name: 'Bacon', id: '29', horseId: 0},
    {first_name: 'Deborah', last_name: 'Illia', id: '120', horseId: 0}];
    this.horseList = [{name: 'Petit Poney', id: 4}, {name: 'Tempete', id: 12}, {name: 'Henri', id: 20}];
  }

  validateLesson() {
    if(this.userList[0].horseId * this.userList[1].horseId * this.userList[2].horseId == 0) {
      alert('Vous n\'avez pas affecté tous les chevaux');
    } else {
      /*
      var paire: Paire;
      for (var i=0;i<userList.length;i++) {
        paire = new Paire(this.horseList[i], this.userList[i]);
        this.http.post("http://localhost:8080/utilisateurs/" + this.sessionId + "/ajouterChevaux", paire, {headers:headers})
      }
      */
      alert(this.userList[0].first_name + ' a le cheval ' + this.userList[0].horseId + ', ' + this.userList[1].first_name
      + ':' + this.userList[1].horseId + ', ' + this.userList[2].first_name + ':' + this.userList[2].horseId);
      this.router.navigate(['/reprises']);
    }
  }

}
