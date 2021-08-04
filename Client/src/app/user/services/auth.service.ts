import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = "http://localhost:3000/";
  constructor(private http: HttpClient) { }


  GetAuth(){
    return this.http.get(`${this.uri}/login`);
  }
}
