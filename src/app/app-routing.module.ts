import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { HomeComponent } from './home/home.component';
import { ReprisesComponent } from './reprises/reprises.component';

const routes: Routes = [{ path: '', redirectTo: '/connection', pathMatch: 'full' },
{ path: 'connection', component: ConnectionComponent },
{ path: 'home', component: HomeComponent },
{ path: 'reprises', component: ReprisesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
