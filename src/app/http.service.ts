import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient : HttpClient) { }

  
  fetchData() {

    return this.httpclient.get('https://libraries.io/api/platforms');


  }
}
