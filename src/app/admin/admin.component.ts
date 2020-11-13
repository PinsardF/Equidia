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
  galop: string;
  mdp: string;
  id: number;
}
export interface AddUser {
  nom: string;
  prenom: string;
  email: string;
  role: string;
  telephone: string;
  numLicense: string;
  galop: string;
  mdp: string;
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
  adminPasswordForm = new FormControl('', [Validators.required]);
  adminSearchForm = new FormControl('', [Validators.required]);
  monitorFirstNameForm = new FormControl('', [Validators.required]);
  monitorLastNameForm = new FormControl('', [Validators.required]);
  monitorEmailForm = new FormControl('', [Validators.required, Validators.email]);
  monitorPhoneForm = new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]);
  monitorLicenseForm = new FormControl('', []);
  monitorPasswordForm = new FormControl('', [Validators.required]);
  monitorSearchForm = new FormControl('', [Validators.required]);
  userSearchForm = new FormControl('', [Validators.required]);


  adminFirstName: string;
  adminLastName: string;
  adminEmail: string;
  adminPhone: string;
  adminLicense: string;
  adminPassword: string;
  adminSearch: string;
  monitorFirstName: string;
  monitorLastName: string;
  monitorEmail: string;
  monitorPhone: string;
  monitorLicense: string;
  monitorPassword: string;
  monitorSearch: string;
  userSearch: string;

  adminList: User[];
  monitorList: User[];
  userList: User[];
  adminDisplayedColumns: string[] = ['prenom', 'nom', 'email', 'telephone'];
  monitorDisplayedColumns: string[] = ['prenom', 'nom', 'email', 'telephone', 'numLicense'];
  userDisplayedColumns: string[] = ['prenom', 'nom', 'email', 'telephone', 'numLicense'];

  constructor(private router: Router, private http: HttpClient) { }

  async ngOnInit(): Promise<void> {
    this.role = sessionStorage.getItem("role");
    if (this.role == "superadmin") {
      var adminResult;
      await this.http.get("http://localhost:8080/administrateurs/",{headers:headers})
      .toPromise().then(function(res) {
        adminResult = res;
      });
      this.adminList = adminResult;
    }

    var moniteurResult;
    await this.http.get("http://localhost:8080/moniteurs/",{headers:headers})
    .toPromise().then(function(res) {
      moniteurResult = res;
    });
    this.monitorList = moniteurResult;

    var cavalierResult;
    await this.http.get("http://localhost:8080/cavaliers/",{headers:headers})
    .toPromise().then(function(res) {
      cavalierResult = res;
    });
    this.userList = cavalierResult;
  }

  getErrorMessageadmFN() {
    if (this.adminFirstNameForm.hasError('required')) {
      return 'Vous n\'avez pas entré de prénom';
    }
  }

  getErrorMessageadmLN() {
    if (this.adminLastNameForm.hasError('required')) {
      return 'Vous n\'avez pas entré de nom de famille';
    }
  }

  getErrorMessageadmE() {
    if (this.adminEmailForm.hasError('required') || this.adminEmailForm.hasError('email')) {
      return 'L\'email entré n\'est pas valide';
    }
  }

  getErrorMessageadmP() {
    if (this.adminPhoneForm.hasError('required')) {
      return 'Vous n\'avez pas entré de téléphone';
    }
  }

  getErrorMessageadmPW() {
    if (this.adminPasswordForm.hasError('required')) {
      return 'Vous n\'avez pas entré de mot de passe';
    }
  }

  async addAdmin() {
    if(this.adminLicense == undefined) {
      this.adminLicense = "";
    }
    var newAdmin: AddUser = {nom:this.adminLastName,prenom:this.adminFirstName,email:this.adminEmail,
    role:"admin",telephone:this.adminPhone,numLicense:this.adminLicense,galop:"1",mdp:this.adminPassword};
    
    await this.http.post("http://localhost:8080/utilisateurs/",newAdmin,{headers:headers})
    .toPromise();
  }

  async searchAdmin() {
    sessionStorage.setItem("search", this.adminSearch);
    sessionStorage.setItem("searchType", "admin");

    /*
    var test: User[];
    await this.http.get("http://localhost:8080/administrateurs/"+this.adminSearch,{headers:headers})
    .toPromise().then(function(res) {
      //console.log(res);
    });*/

    /*
    alert('Recherche d\'admin avec ' + this.adminSearch);
    this.router.navigate(['/resultatsUtilisateurs'])*/
  }

  getErrorMessagemonFN() {
    if (this.monitorFirstNameForm.hasError('required')) {
      return 'Vous n\'avez pas entré de prénom';
    }
  }

  getErrorMessagemonLN() {
    if (this.monitorLastNameForm.hasError('required')) {
      return 'Vous n\'avez pas entré de nom';
    }
  }

  getErrorMessagemonE() {
    if (this.monitorEmailForm.hasError('required') || this.monitorEmailForm.hasError('email')) {
      return 'L\'email entré n\'est pas valide';
    }
  }

  getErrorMessagemonP() {
    if (this.monitorPhoneForm.hasError('required')) {
      return 'Vous n\'avez pas entré de téléphone';
    }
  }

  getErrorMessagemonPW() {
    if (this.monitorPasswordForm.hasError('required')) {
      return 'Vous n\'avez pas entré de mot de passe';
    }
  }

  async addMonitor() {
    var newMoniteur: AddUser = {nom:this.monitorLastName,prenom:this.monitorFirstName,email:this.monitorEmail,
    role:"moniteur",telephone:this.monitorPhone,numLicense:this.monitorLicense,galop:"1",mdp:this.monitorPassword};
      
    await this.http.post("http://localhost:8080/utilisateurs/",newMoniteur,{headers:headers})
    .toPromise();
  }

  searchMonitor() {
    sessionStorage.setItem("search", this.monitorSearch);
    sessionStorage.setItem("searchType", "moniteur");
    /*
    alert('Recherche de moniteur avec ' + this.monitorSearch);
    this.router.navigate(['/resultatsUtilisateurs']);*/
  }

  searchUser() {
    sessionStorage.setItem("search", this.userSearch);
    sessionStorage.setItem("searchType", "cavalier");
    /*
    alert('Recherche de cavalier avec ' + this.userSearch);
    this.router.navigate(['/resultatsUtilisateurs']);*/
  }

}
