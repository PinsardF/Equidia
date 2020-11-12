import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface Reprise {
  date: string;
  hour: string;
  level: string;
  instructor: string;
  id: string;
}

@Component({
  selector: 'app-reprises',
  templateUrl: './reprises.component.html',
  styleUrls: ['./reprises.component.css']
})

export class ReprisesComponent implements OnInit {

  isCavalier: Boolean = false;
  isMoniteur: Boolean = false;

  searchLevelForm = new FormControl();
  searchMonitorForm = new FormControl();
  createLevelForm = new FormControl('', [Validators.required]);
  participantsForm = new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]);
  createDateForm = new FormControl('', [Validators.required]);
  beginningHourForm = new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]);
  levelList: string[] = ['1', '2', '3', '4', '5', '6', '7'];
  monitorList: string[] = ['Julien Debas', 'Corinne Azet', 'Sarah Connor'];
  searchSelectedLevels: string[];
  searchSelectedMonitors: string[];
  dataList: Reprise[];
  machin: string;
  before: Date = null;
  after: Date = null;
  selectedLevel: string;
  participants: string;
  beginningHour: string;
  beginning: string;
  end: Date = null;
  displayedColumns: string[] = ['date', 'hour', 'level', 'instructor'];
  gestionColumns: string[] = ['date', 'hour', 'level', 'instructor', 'manage'];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isMoniteur = true;
    //this.isCavalier = true;
    this.dataList = [{date: '24/08', hour: '18h', level: 'Niveau 2', instructor: 'Avec Julien Frimas', id:'2'},
    {date: '24/08', hour: '18h30', level: 'Niveau 3', instructor: 'Avec Julien Frimas', id:'5'},
    {date: '24/08', hour: '18h30', level: 'Niveau 3', instructor: 'Avec Julien Frimas', id:'6'},
    {date: '25/08', hour: '15h30', level: 'Niveau 3', instructor: 'Avec Julien Frimas', id:'7'},
    {date: '27/08', hour: '11h', level: 'Niveau 4', instructor: 'Avec Damien Bonnet', id:'8'}];
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
    alert("Niveaux: " + this.searchSelectedLevels + ", moniteurs: " + this.searchSelectedMonitors + ", avant le " + beforeTest
    + " et après le " + afterTest);
    this.router.navigate(['/resultatsReprises']);
  }

  getErrorMessageCreateLevel() {
    if(this.createLevelForm.hasError('required')) {
      return 'Vous n\'avez pas choisi de niveau';
    }
  }

  getErrorMessageParticipants() {
    if (this.participantsForm.hasError('required')) {
      return 'Vous n\'avez pas entré de nombre de participants';
    } else if (this.participantsForm.hasError('pattern')) {
      return 'Le nombre entré n\'est pas valide';
    }
  }

  getErrorMessagebeginHour() {
    if (this.beginningHourForm.hasError('required')) {
      return 'Vous n\'avez pas entré d\'heure de début';
    } else if (this.beginningHourForm.hasError('pattern')) {
      return 'L\'heure entrée n\'est pas valide';
    }
  }

  getErrorMessagecreateDate() {
    if (this.createDateForm.hasError('required')) {
      return 'Vous n\'avez pas entré de date';
    }
  }

  createLesson() {
    //REQUEST : INSERT INTO lessons (hour, date, monitorId, horses) VALUES ()
    var year = this.beginning.substr(0,4);
    var month = this.beginning.substr(5,2);
    var day = this.beginning.substr(8,2);
    var hour = this.beginning.substr(11,2);
    var minutes = this.beginning.substr(14,2);
    alert('Nouvelle leçon créée le ' + day + '/' + month + '/' + year + ' à ' + hour + 'H' + minutes + ' avec '
    + this.participants + ' participants');
  }

  manage(id: string) {
    alert('Gestion reprise ' + id);
    this.router.navigate(['/gestionReprises']);
  }
}
