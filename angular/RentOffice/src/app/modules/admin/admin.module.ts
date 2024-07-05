import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ViewOfficesComponent } from './components/view-offices/view-offices.component';
import { UpdateOfficesComponent } from './components/update-offices/update-offices.component';
import { PostOfficeComponent } from './components/post-office/post-office.component';
import { NgZorroModule } from '../../ng-zorro.module';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReservationsComponent,
    ViewOfficesComponent,
    UpdateOfficesComponent,
    PostOfficeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroModule
  ]
})
export class AdminModule { }
