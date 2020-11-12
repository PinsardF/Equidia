import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface Horse {
  name: string;
  level: string;
  age: string;
}

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
  displayedColumns: string[] = ['name', 'level', 'age'];

  constructor() { }

  ngOnInit(): void {
    this.role = sessionStorage.getItem("role");
    this.role = "superadmin";
    this.horseList = [{name: 'Ponpon', level: '3', age: '5'}, {name: 'Tempête', level: '6', age: '10'},
      {name: 'Sunshine', level: '1', age: '3'}];
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

  addHorse() {
    //REQUEST : INSERT INTO horses (name, level, age) VALUES ()
    alert('Nouveau cheval : ' + this.horseName + ' Lvl.' + this.horseLevel + ' ' + this.horseAge + ' ans');
  }

}
