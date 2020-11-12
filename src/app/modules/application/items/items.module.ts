import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';


@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  exports: [
    ItemsComponent
  ],
  declarations: [
    ItemsComponent
  ],
  providers: [
  ]
})
export class ItemsModule { }
