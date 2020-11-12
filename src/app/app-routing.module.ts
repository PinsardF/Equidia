import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { ReprisesComponent } from './reprises/reprises.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { HorsesComponent } from './horses/horses.component';
import { AdminComponent } from './admin/admin.component';
import { GetPasswordComponent } from './get-password/get-password.component';
import { UsersResultsComponent } from './users-results/users-results.component';
import { ReprisesResultsComponent } from './reprises-results/reprises-results.component';
import { ManageReprisesComponent } from './manage-reprises/manage-reprises.component';

const routes: Routes = [{ path: '', redirectTo: '/connection', pathMatch: 'full' },
{ path: 'connection', component: ConnectionComponent },
{ path: 'reprises', component: ReprisesComponent },
{ path: 'moncompte', component: MyAccountComponent },
{ path: 'chevaux', component: HorsesComponent },
{ path: 'admin', component: AdminComponent },
{ path: 'motdepasse', component: GetPasswordComponent },
{ path: 'resultatsUtilisateurs', component: UsersResultsComponent },
{ path: 'resultatsReprises', component: ReprisesResultsComponent },
{ path: 'gestionReprises', component: ManageReprisesComponent },
{ path: '*', redirectTo: '/connection', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
