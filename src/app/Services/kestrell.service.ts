import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class KestrellService {
  protected httpClient: HttpClient;
  protected url: string;
  protected apiEndpoint = 'https://localhost:44303/';
  constructor(endpoint: string, httpClient: HttpClient) {
    this.url = (this.apiEndpoint + endpoint);
    this.httpClient = httpClient;
  }

  public getUrl(identifier?: any) {
    return this.url + '/' + String(identifier);
  }
}
