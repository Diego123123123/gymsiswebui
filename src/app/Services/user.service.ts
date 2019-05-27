import { Injectable } from '@angular/core';
import { KestrellService } from './kestrell.service';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService extends KestrellService {

  constructor(public http: HttpClient) {
    super('users', http);
  }

  signUp(user) {
    return this.httpClient.post(this.url + '/create', user);
  }

  signin(user) {
    return this.httpClient.post(this.url + '/login', user);
  }

  getUsers() {
    return this.httpClient.get(this.url);
  }


  getToken() {
    return sessionStorage.getItem('token');
  }

  getCurrentUserId() {
    return jwt_decode(sessionStorage.getItem('token'))["userid"];
  }

}
