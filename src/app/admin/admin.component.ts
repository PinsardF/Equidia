import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface User {
  nom: string;
  prenom: string;
  email: string;
  role: string;
  telephone: string;
  numLicense: string;
  galop: number;
  mdp: string;
  id: number;
}

const headers = new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  role: string;

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

  adminList: User[];
  monitorList: User[];
  userList: User[];
  adminDisplayedColumns: string[] = ['prenom', 'nom', 'email', 'telephone'];
  monitorDisplayedColumns: string[] = ['prenom', 'nom', 'email', 'telephone', 'numLicense'];
  userDisplayedColumns: string[] = ['prenom', 'nom', 'email', 'telephone', 'numLicense'];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.role = sessionStorage.getItem("role");
    this.role='superadmin';//A SUPPRIMER

    this.http.get("http://localhost:8080/utilisateurs", {headers:headers}).subscribe(function(utilisateurs: User[]) {
      console.log(utilisateurs);
    });

    this.adminList = [{prenom: 'Jean', nom: 'Kadar', email: 'kadar@et.esiea.fr', telephone: '0741442585', numLicense: '',
    role: 'admin', galop: 3, mdp: '', id: 2},
    {prenom: 'Wilfried', nom: 'Destin', email: 'destinw@orange.fr', telephone: '0649482530', numLicense: '251',
    role: 'admin', galop: 7, mdp: '', id:12}];
    this.monitorList = [{prenom: 'Eric', nom: 'Paolo', email: 'paoloeric@gmail.com', telephone: '0728442985', numLicense: '12',
    role: 'moniteur', galop: 3, mdp: '', id: 5},
    {prenom: 'Aude', nom: 'Chauvat', email: 'chauvata@orange.fr', telephone: '0641565552', numLicense: '140', role: 'moniteur',
    galop: 4, mdp: '', id: 128},
    {prenom: 'Cassandra', nom: 'Jouasse', email: 'cass@free.fr', telephone: '0630201287', numLicense: '250', role: 'moniteur',
    galop: 6, mdp: '', id: 129}];
    this.userList = [{prenom: 'Sarah', nom: 'Paolo', email: 'paolosarah@gmail.com', telephone: '0728142984', numLicense: '852',
    role: 'cavalier', galop: 1, mdp: '', id: 130},
    {prenom: 'Jeannine', nom: 'Pointier', email: 'pointierjeannine@orange.fr', telephone: '0134237133', numLicense: '1024',
    role: 'cavalier', galop: 1, mdp: '', id: 132},
    {prenom: 'Claude', nom: 'Dubonnet', email: 'duboclaude@gmail.com', telephone: '0606215537', numLicense: '',
    role: 'cavalier', galop: 2, mdp: '', id: 133}];
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
