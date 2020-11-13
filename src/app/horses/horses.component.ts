import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface Horse {
  name: string;
  level: string;
  age: string;
}

const headers = new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.role = sessionStorage.getItem("role");
    this.role = "superadmin";
    /*
    this.http.get("http://localhost:8080/chevaux", {headers:headers}).subscribe(function(chevaux: Horse[]) {
      this.horseList = chevaux;
    });*/
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
    /*
    var newHorse: Horse = new Horse(this.horseName,this.horseLevel,this.horseAge);
    this.http.post("http://localhost:8080/chevaux", newHorse, {headers:headers});
    */
    alert('Nouveau cheval : ' + this.horseName + ' Lvl.' + this.horseLevel + ' ' + this.horseAge + ' ans');
  }

}
