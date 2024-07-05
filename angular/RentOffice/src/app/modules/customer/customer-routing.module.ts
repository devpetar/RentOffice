import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficesComponent } from './offices/offices.component';
import { ViewReservationsComponent } from './view-reservations/view-reservations.component';

const routes: Routes = [
  { path: "offices", component: OfficesComponent },
  { path: "reservations", component: ViewReservationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
