import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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

  levelForm = new FormControl();
  monitorForm = new FormControl();
  levelList: string[] = ['1', '2', '3', '4', '5', '6', '7'];
  monitorList: string[] = ['Julien Debas', 'Corinne Azet', 'Sarah Connor']
  selectedLevels: string[] = [];
  selectedMonitors: string[] = [];
  dataList: Reprise[];
  machin: string;
  before: Date = null;
  after: Date = null;

  constructor() { }

  ngOnInit(): void {
    this.dataList = [{date: '24/08', hour: '18h', level: 'Niveau 2', instructor: 'Avec Julien Frimas'},
    {date: '24/08', hour: '18h30', level: 'Niveau 3', instructor: 'Avec Julien Frimas'}];
    // console.log(this.dataList);
  }

  search() {
    var beforeTest = "";
    if(this.before != null) {
      var beforeMonth = this.before.getMonth() + 1;
      beforeTest = this.before.getDate().toString() + "/" + beforeMonth + "/" + this.before.getFullYear(); 
    }
    var afterTest = "";
    if(this.after != null) {
      var afterMonth = this.after.getMonth() + 1;
      afterTest = this.after.getDate().toString() + "/" + afterMonth + "/" + this.after.getFullYear(); 
    }
    alert("Niveaux: " + this.selectedLevels + ", moniteurs: " + this.selectedMonitors + ", avant le " + beforeTest
    + " et après le " + afterTest);
  }
}
