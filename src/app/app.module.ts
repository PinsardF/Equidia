import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectionComponent } from './connection/connection.component';
import { HomeComponent } from './home/home.component';
import { ReprisesComponent } from './reprises/reprises.component';
import { MyAccountComponent } from './my-account/my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    HomeComponent,
    ReprisesComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
