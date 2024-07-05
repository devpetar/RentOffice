import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { OfficesComponent } from './offices/offices.component';
import { ViewReservationsComponent } from './view-reservations/view-reservations.component';
import { NgZorroModule } from '../../ng-zorro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OfficesComponent,
    ViewReservationsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroModule
  ]
})
export class CustomerModule { }
