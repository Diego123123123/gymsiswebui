import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {UserhomepageComponent} from "./components/userhomepage/userhomepage.component";

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'signup',component: SignupComponent},
  {path:'userhome', component: UserhomepageComponent},
  {path:'**',component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
