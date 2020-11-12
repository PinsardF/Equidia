import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectionComponent } from './connection/connection.component';
import { ReprisesComponent } from './reprises/reprises.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HorsesComponent } from './horses/horses.component';
import { MatTableModule } from '@angular/material/table';
import { AdminComponent } from './admin/admin.component';
import { GetPasswordComponent } from './get-password/get-password.component';
import { UsersResultsComponent } from './users-results/users-results.component';
import { ReprisesResultsComponent } from './reprises-results/reprises-results.component';
import { ManageReprisesComponent } from './manage-reprises/manage-reprises.component';
import { MatCardModule } from '@angular/material/card';
import { ItemsModule } from './modules/application/items/items.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    ReprisesComponent,
    MyAccountComponent,
    HorsesComponent,
    AdminComponent,
    GetPasswordComponent,
    UsersResultsComponent,
    ReprisesResultsComponent,
    ManageReprisesComponent
    //ItemsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-starter' }),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatCardModule,
    ItemsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
