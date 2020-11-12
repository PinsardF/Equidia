import { Component, OnInit } from '@angular/core';

export interface Member {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  license: string;
  role: string;
}

@Component({
  selector: 'app-users-results',
  templateUrl: './users-results.component.html',
  styleUrls: ['./users-results.component.css']
})
export class UsersResultsComponent implements OnInit {

  role: string;

  resultList: Member[];
  DisplayedColumns: string[] = ['role', 'firstName', 'lastName', 'email', 'phone', 'license'];

  constructor() { }

  ngOnInit(): void {
    this.role = sessionStorage.getItem("role");
    this.role = 'admin'//A SUPPRIMER
    this.resultList = [{role: 'admin', firstName: 'Eric', lastName: 'Paolo', email: 'paoloeric@gmail.com',
    phone: '0728442985', license: '12'},
    {role: 'admin', firstName: 'Aude', lastName: 'Chauvat', email: 'chauvata@orange.fr',
    phone: '0641565552', license: '140'},
    {role: 'admin', firstName: 'Cassandra', lastName: 'Jouasse', email: 'cass@free.fr', phone: '0630201287', license: ''}];
  }

}
