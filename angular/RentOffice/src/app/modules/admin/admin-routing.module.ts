import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostOfficeComponent } from './components/post-office/post-office.component';
import { UpdateOfficesComponent } from './components/update-offices/update-offices.component';
import { ViewOfficesComponent } from './components/view-offices/view-offices.component';
import { ReservationsComponent } from './components/reservations/reservations.component';

const routes: Routes = [
  { path: 'office', component: PostOfficeComponent },
  { path: 'office/:id/edit', component: UpdateOfficesComponent },
  { path: 'offices', component: ViewOfficesComponent },
  { path: 'reservations', component: ReservationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }