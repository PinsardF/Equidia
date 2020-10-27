import { Component, OnInit } from '@angular/core';

export interface Reprise {
  date: string;
  hour: string;
  level: string;
  instructor: string;
}

@Component({
  selector: 'app-reprises',
  templateUrl: './reprises.component.html',
  styleUrls: ['./reprises.component.css']
})
export class ReprisesComponent implements OnInit {

  //displayedColumns: string[] = ['Date', 'Horaire', 'Niveau', 'Moniteur'];
  dataList: Reprise[];
  machin: string;

  constructor() { }

  ngOnInit(): void {
    this.dataList = [{date: '24/08', hour: '18h', level: 'Niveau 2', instructor: 'Avec Julien Frimas'},
    {date: '24/08', hour: '18h30', level: 'Niveau 3', instructor: 'Avec Julien Frimas'}];
    // console.log(this.dataList);
  }

}
