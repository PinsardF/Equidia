import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  license_number: string;

  constructor() { }

  ngOnInit(): void {/*
    this.first_name = "Eric";
    this.last_name = "Dubois";
    this.email = "ericdubois@gmail.com";
    this.phone = "0158744472";
    this.license_number = "";*/
  }

  validate() {
    return;
  }

}
