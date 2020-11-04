import { Component, OnInit } from '@angular/core';

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

  horseList: Horse[];
  displayedColumns: string[] = ['name', 'level', 'age'];

  constructor() { }

  ngOnInit(): void {
    this.horseList = [{name: 'Ponpon', level: '3', age: '5'}, {name: 'Tempête', level: '6', age: '10'},
      {name: 'Sunshine', level: '1', age: '3'}];
  }

}
