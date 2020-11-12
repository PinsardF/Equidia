import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Reprise {
  date: string;
  hour: string;
  level: string;
  instructor: string;
  id: string;
}

@Component({
  selector: 'app-reprises-results',
  templateUrl: './reprises-results.component.html',
  styleUrls: ['./reprises-results.component.css']
})
export class ReprisesResultsComponent implements OnInit {

  role: string;
  resultList: Reprise[];
  DisplayedColumns: string[] = ['date', 'hour', 'level', 'instructor', 'subscription'];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.role = sessionStorage.getItem("role");
    this.role='cavalier';//A SUPPRIMER
    if (this.role == 'moniteur') {
      this.DisplayedColumns = ['date', 'hour', 'level', 'instructor'];
    }
    this.resultList = [{date: '10/04/2021', hour: '12:30', level: '5', instructor: 'George Sand', id: '28'},
    {date: '11/04/2021', hour: '12:30', level: '5', instructor: 'George Sand', id:'147'},
    {date: '11/04/2021', hour: '18:30', level: '6', instructor: 'Didier Malin', id: '148'}]
  }

  subscribe(id: string) {
    //REQUEST : INSERT INTO subscriptions (userId, lessonId) VALUES ()
    alert("Inscription au cours " + id);
    this.router.navigate(['/reprises']);
  }

}
