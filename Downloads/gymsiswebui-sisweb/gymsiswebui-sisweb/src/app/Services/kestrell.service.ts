import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class KestrellService {
  protected httpClient: HttpClient;
  protected url: string;
  protected apiEndpoint = 'http://gym20190618095731.azurewebsites.net/';
  constructor(endpoint: string, httpClient: HttpClient, apiEndpoint = 'http://gym20190618095731.azurewebsites.net/') {
    this.apiEndpoint = apiEndpoint;
    this.url = (this.apiEndpoint + endpoint);
    this.httpClient = httpClient;
  }

  public getUrl(identifier?: any) {
    return this.url + '/' + String(identifier);
  }

  public getCurrentUrl() {
    return this.url;
  }
}
