import { KestrellService } from './kestrell.service';
import { HttpClient } from '@angular/common/http';

import {Injectable} from '@angular/core';
import {Reserve} from '../Models/reserve';

@Injectable({
  providedIn: 'root'
})
export class ReserveService extends KestrellService {

  constructor(public http: HttpClient) {
    super('reserves', http);
  }
  addReserve(reserve) {
    return this.http.post(this.url, reserve);
  }

  getReservesByUserId(userid) {
    console.log('------------------------');
    console.log(this.url + '/users/' + sessionStorage.getItem('token'))
    return this.http.get(this.url + '/users/' + userid);
  }

  getReserves(){
    return this.http.get(this.url);
  }

}

