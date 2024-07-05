import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './core/componenets/create-user/create-user.component';
import { LogInComponent } from './core/componenets/log-in/log-in.component';
import { AboutUsComponent } from './core/componenets/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'create-user', component: CreateUserComponent},
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'customer', loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
