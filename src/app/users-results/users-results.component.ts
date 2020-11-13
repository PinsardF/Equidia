import { Component, OnInit } from '@angular/core';

export interface User {
  nom: string;
  prenom: string;
  email: string;
  role: string;
  telephone: string;
  numLicense: string;
  galop: number;
  mdp: string;
  id: number;
}

@Component({
  selector: 'app-users-results',
  templateUrl: './users-results.component.html',
  styleUrls: ['./users-results.component.css']
})
export class UsersResultsComponent implements OnInit {

  role: string;

  resultList: User[];
  DisplayedColumns: string[] = ['role', 'prenom', 'nom', 'email', 'telephone', 'numLicense'];

  constructor() { }

  ngOnInit(): void {
    this.role = sessionStorage.getItem("role");
    this.role = 'admin'//A SUPPRIMER
    /*
    var search = sessionStorage.getItem("search");
    var searchType = sessionStorage.getItem("searchType");
    var baseUrl = "";
    if (searchType == "admin") {
      baseUrl = "http://localhost:8080/administrateurs/";
    } else if (searchType == "moniteur") {
      baseUrl = "http://localhost:8080/moniteurs/";
    } else {
      baseUrl = "http://localhost:8080/cavaliers/"
    }
    this.http.get(baseUrl + search,
    {headers:headers}).subscribe(function(results: User[]) {
      this.resultList = results;
    });
    sessionStorage.setItem("search", null);
    sessionStorage.setItem("searchType", null);
    */
    this.resultList = [{role: 'admin', prenom: 'Eric', nom: 'Paolo', email: 'paoloeric@gmail.com',
    telephone: '0728442985', numLicense: '12', galop: 0, mdp: 'test', id: 23},
    {role: 'admin', prenom: 'Aude', nom: 'Chauvat', email: 'chauvata@orange.fr',
    telephone: '0641565552', numLicense: '140', galop: 0, mdp: 'test', id: 24},
    {role: 'admin', prenom: 'Cassandra', nom: 'Jouasse', email: 'cass@free.fr', telephone: '0630201287', numLicense: '',
    galop: 0, mdp: 'test', id: 25}];
  }

}
