import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface Member {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  license: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminFirstNameForm = new FormControl('', [Validators.required]);
  adminLastNameForm = new FormControl('', [Validators.required]);
  adminEmailForm = new FormControl('', [Validators.required, Validators.email]);
  adminPhoneForm = new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]);
  adminLicenseForm = new FormControl('', []);
  adminSearchForm = new FormControl('', [Validators.required]);
  monitorFirstNameForm = new FormControl('', [Validators.required]);
  monitorLastNameForm = new FormControl('', [Validators.required]);
  monitorEmailForm = new FormControl('', [Validators.required, Validators.email]);
  monitorPhoneForm = new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]);
  monitorLicenseForm = new FormControl('', []);
  monitorSearchForm = new FormControl('', [Validators.required]);
  userSearchForm = new FormControl('', [Validators.required]);


  adminFirstName: string;
  adminLastName: string;
  adminEmail: string;
  adminPhone: string;
  adminLicense: string;
  adminSearch: string;
  monitorFirstName: string;
  monitorLastName: string;
  monitorEmail: string;
  monitorPhone: string;
  monitorLicense: string;
  monitorSearch: string;
  userSearch: string;

  adminList: Member[];
  monitorList: Member[];
  userList: Member[];
  DisplayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone', 'license'];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.adminList = [{firstName: 'Jean', lastName: 'Kadar', email: 'kadar@et.esiea.fr', phone: '0741442585', license: ''},
    {firstName: 'Wilfried', lastName: 'Destin', email: 'destinw@orange.fr', phone: '0649482530', license: '251'}];
    this.monitorList = [{firstName: 'Eric', lastName: 'Paolo', email: 'paoloeric@gmail.com', phone: '0728442985', license: '12'},
    {firstName: 'Aude', lastName: 'Chauvat', email: 'chauvata@orange.fr', phone: '0641565552', license: '140'},
    {firstName: 'Cassandra', lastName: 'Jouasse', email: 'cass@free.fr', phone: '0630201287', license: '250'}];
    this.userList = [{firstName: 'Sarah', lastName: 'Paolo', email: 'paolosarah@gmail.com', phone: '0728142984', license: '852'},
    {firstName: 'Jeannine', lastName: 'Pointier', email: 'pointierjeannine@orange.fr', phone: '0134237133', license: '1024'},
    {firstName: 'Claude', lastName: 'Dubonnet', email: 'duboclaude@gmail.com', phone: '0606215537', license: ''}];
  }

  getErrorMessageadmFN() {
    if (this.adminFirstNameForm.hasError('required')) {
      return 'Le prénom entré n\'est pas valide';
    }
  }

  getErrorMessageadmLN() {
    if (this.adminLastNameForm.hasError('required')) {
      return 'Le nom entré n\'est pas valide';
    }
  }

  getErrorMessageadmE() {
    if (this.adminEmailForm.hasError('required') || this.adminEmailForm.hasError('email')) {
      return 'L\'email entré n\'est pas valide';
    }
  }

  getErrorMessageadmP() {
    if (this.adminPhoneForm.hasError('required')) {
      return 'Le téléphone entré n\'est pas valide';
    }
  }

  addAdmin() {
    //REQUEST : INSERT INTO users (first_name, last_name, email, password, phone, license) VALUES ()
    alert('Nouvel admin créé : ' + this.adminFirstName + ' ' + this.adminLastName + ' ' + this.adminEmail + 
    ' ' + this.adminPhone + ' ' + this.adminLicense);
  }

  searchAdmin() {
    //REQUEST : SELECT * FROM users WHERE users.role = "admin" AND (first_name LIKE [?] OR last_name LIKE [?]
    //OR email LIKE [?] OR phone LIKE [?] OR license LIKE [?])
    alert('Recherche d\'admin avec ' + this.adminSearch);
    this.router.navigate(['/resultatsUtilisateurs'])
  }

  getErrorMessagemonFN() {
    if (this.monitorFirstNameForm.hasError('required')) {
      return 'Le prénom entré n\'est pas valide';
    }
  }

  getErrorMessagemonLN() {
    if (this.monitorLastNameForm.hasError('required')) {
      return 'Le nom entré n\'est pas valide';
    }
  }

  getErrorMessagemonE() {
    if (this.monitorEmailForm.hasError('required') || this.monitorEmailForm.hasError('email')) {
      return 'L\'email entré n\'est pas valide';
    }
  }

  getErrorMessagemonP() {
    if (this.monitorPhoneForm.hasError('required')) {
      return 'Le téléphone entré n\'est pas valide';
    }
  }

  addMonitor() {
    //REQUEST : INSERT INTO users (first_name, last_name, email, password, phone, license) VALUES ()
    alert('Nouvel admin créé : ' + this.monitorFirstName + ' ' + this.monitorLastName + ' ' + this.monitorEmail + 
    ' ' + this.monitorPhone + ' ' + this.monitorLicense);
  }

  searchMonitor() {
    //REQUEST : SELECT * FROM users WHERE users.role = "monitor" AND (first_name LIKE [?] OR last_name LIKE [?]
    //OR email LIKE [?] OR phone LIKE [?] OR license LIKE [?])
    alert('Recherche de moniteur avec ' + this.monitorSearch);
    this.router.navigate(['/resultatsUtilisateurs'])
  }

  searchUser() {
    //REQUEST : SELECT * FROM users WHERE users.role = "user" AND (first_name LIKE [?] OR last_name LIKE [?]
    //OR email LIKE [?] OR phone LIKE [?] OR license LIKE [?])
    alert('Recherche de cavalier avec ' + this.userSearch);
    this.router.navigate(['/resultatsUtilisateurs'])
  }

}
