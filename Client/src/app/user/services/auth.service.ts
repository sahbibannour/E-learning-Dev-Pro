import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from 'src/app/Models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
  constructor(private http: HttpClient) { }


  ResgisterUser(user:any){
    return this.http.post('http://localhost:3000/auth/register', user);
  }
}
