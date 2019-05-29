import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KestrellService } from './kestrell.service';

@Injectable({
  providedIn: 'root'
})
export class HereMaService extends KestrellService {

  constructor(public http: HttpClient) {
    super('here-mapa', http);
   }

   getMap(){
    return this.http.get((this.url)+'/here-map');
  }
}
 