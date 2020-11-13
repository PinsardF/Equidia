import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Reprise {
  date: string;
  hour: string;
  level: string;
  instructor: string;
  id: string;
}

const headers = new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});

@Component({
  selector: 'app-reprises-results',
  templateUrl: './reprises-results.component.html',
  styleUrls: ['./reprises-results.component.css']
})
export class ReprisesResultsComponent implements OnInit {

  role: string;
  resultList: Reprise[];
  DisplayedColumns: string[] = ['date', 'hour', 'level', 'instructor', 'subscription'];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.role = sessionStorage.getItem("role");
    this.role='cavalier';//A SUPPRIMER
    if (this.role == 'moniteur') {
      this.DisplayedColumns = ['date', 'hour', 'level', 'instructor'];
    }
    /*
    OBTENIR LES REPRISES
    */
    this.resultList = [{date: '10/04/2021', hour: '12:30', level: '5', instructor: 'George Sand', id: '28'},
    {date: '11/04/2021', hour: '12:30', level: '5', instructor: 'George Sand', id:'147'},
    {date: '11/04/2021', hour: '18:30', level: '6', instructor: 'Didier Malin', id: '148'}]
  }

  subscribe(id: string) {
    //INSCRIRE LE CAVALIER A LA REPRISE
    alert("Inscription au cours " + id);
    this.router.navigate(['/reprises']);
  }

}
