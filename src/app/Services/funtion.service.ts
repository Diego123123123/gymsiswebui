import { Injectable } from '@angular/core';
import { KestrellService } from './kestrell.service';
import { HttpClient } from '@angular/common/http';
import {MyFunction, EditFunction} from '../Models/function';

@Injectable({
  providedIn: 'root'
})
export class FuntionService extends KestrellService{

  constructor(public http: HttpClient) {
    super('functions', http);
  }

  getFunctions() {
    return this.http.get<MyFunction[]>(this.url);
  }

  getFunctionById(){
    return this.http.get((this.url) + '/' + localStorage.getItem('functionId'));
  }

  deleteFunction(){
      return this.http.delete((this.url)+ '/'+localStorage.getItem('functionId'));
  }

  updateFunction(editFunction:EditFunction){
      return this.http.put<EditFunction>((this.url)+ '/'+localStorage.getItem('functionId'),editFunction);
  }

  postFunction(myFunction){
    return this.http.post(this.url,myFunction);
  }
}
