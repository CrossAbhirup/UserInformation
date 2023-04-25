import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private REST_URL = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) { }

  getData(){
    return this.httpClient.get(this.REST_URL);
  }
}
