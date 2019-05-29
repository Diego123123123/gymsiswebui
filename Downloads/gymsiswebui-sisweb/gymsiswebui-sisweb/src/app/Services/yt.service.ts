import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YtService {

  public url: string = "https://www.googleapis.com/youtube/v3/search" 


  constructor(private _http: HttpClient) { }

  buscar(valores: string):Observable<any>{
    let uri= `${this.url}?part=snippet&maxResults=5&q=${valores}&key=AIzaSyBgB3W1x3m96NEQJiE3nh_61PYwQaCHuTQ`;
    return this._http.get<any>(uri)
  }
}
