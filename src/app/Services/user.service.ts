import { Injectable } from '@angular/core';
import { KestrellService } from './kestrell.service';
import { HttpClient } from '@angular/common/http';

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


  getToken() {
    let user: any;
    user = JSON.parse(sessionStorage.getItem('token'));
    let token: any;
    token = '';
    if (user) {
      token = user.token;
    }
    return token;
  }


}
