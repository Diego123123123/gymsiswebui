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

}

