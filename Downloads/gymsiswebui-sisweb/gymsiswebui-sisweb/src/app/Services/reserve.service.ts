import { KestrellService } from './kestrell.service';
import { HttpClient } from '@angular/common/http';

import {Injectable} from '@angular/core';
import {Reserve} from '../Models/reserve';
import { ReserveEdit } from '../Models/reserveEdit';

@Injectable({
  providedIn: 'root'
})
export class ReserveService extends KestrellService {

  constructor(public http: HttpClient) {
    super('reserves', http, 'http://localhost:8090/');
  }
  addReserve(reserve) {
    return this.http.post(this.url, reserve);
  }

  getReservesByUserId(userid) {
    return this.http.get(this.url + '/users/' + userid);
  }

  getReserveById(reserveId){
    return this.http.get(this.url + '/' + reserveId);
  }

  // to do
  updateReserve(reserve, reserveId) {
    console.log(reserveId);
    return this.http.put(this.url + '/' + reserveId, reserve);
  }

  deleteReserve(id){
    return this.http.delete(this.url + '/' + id);
  }

  getReserves(){
    return this.http.get(this.url);
  }

  getAllReserves(){
    return this.http.get((this.url) + '/userreserves');
  }

}
