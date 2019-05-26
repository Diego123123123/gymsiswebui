import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {UserhomepageComponent} from './components/userhomepage/userhomepage.component';
import {NewReserveComponent} from './components/new-reserve/new-reserve.component';
import {ReservesComponent} from './components/reserves/reserves.component';
import {AdminHomepageComponent} from './components/admin-homepage/admin-homepage.component';
import {CreateFunctionComponent} from './components/create-function/create-function.component';
import {EditFunctionComponent} from './components/edit-function/edit-function.component';
import {SeeUsersComponent} from './components/see-users/see-users.component';
import { EditreserveComponent } from './components/editreserve/editreserve.component';
import { AllreservesComponent } from './components/allreserves/allreserves.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'userhome', component: UserhomepageComponent},
  {path: 'newReserve', component: NewReserveComponent},
  {path: 'reserves', component: ReservesComponent},
  {path: 'adminhome', component: AdminHomepageComponent},
  {path: 'newfunction', component: CreateFunctionComponent},
  {path: 'editfunction', component: EditFunctionComponent},
  {path: 'users', component: SeeUsersComponent},
  {path: 'editreserve', component: EditreserveComponent},
  {path: 'allreserves', component: AllreservesComponent},
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
