import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserhomepageComponent } from './components/userhomepage/userhomepage.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NewReserveComponent } from './components/new-reserve/new-reserve.component';
import { ReservesComponent } from './components/reserves/reserves.component';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import { CreateFunctionComponent } from './components/create-function/create-function.component';
import { SeeUsersComponent } from './components/see-users/see-users.component';
import { EditFunctionComponent } from './components/edit-function/edit-function.component';
import { EditreserveComponent } from './components/editreserve/editreserve.component';
import { AllreservesComponent } from './components/allreserves/allreserves.component';
import { HereMapComponent } from './here-map/here-map.component';
import { YtComponent } from './components/yt/yt.component';
import { UrlPipe } from './pipes/url.pipe';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserhomepageComponent,
    NewReserveComponent,
    ReservesComponent,
    AdminHomepageComponent,
    CreateFunctionComponent,
    SeeUsersComponent,
    EditFunctionComponent,
    EditreserveComponent,
    AllreservesComponent,
    HereMapComponent,
    YtComponent,
    UrlPipe,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }