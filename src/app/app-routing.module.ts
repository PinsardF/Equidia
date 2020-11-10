import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { ReprisesComponent } from './reprises/reprises.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { HorsesComponent } from './horses/horses.component';
import { AdminComponent } from './admin/admin.component';
import { GetPasswordComponent } from './get-password/get-password.component';
import { UsersResultsComponent } from './users-results/users-results.component';

const routes: Routes = [{ path: '', redirectTo: '/connection', pathMatch: 'full' },
{ path: 'connection', component: ConnectionComponent },
{ path: 'reprises', component: ReprisesComponent },
{ path: 'moncompte', component: MyAccountComponent },
{ path: 'chevaux', component: HorsesComponent },
{ path: 'admin', component: AdminComponent },
{ path: 'motdepasse', component: GetPasswordComponent },
{ path: 'resultats', component: UsersResultsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
