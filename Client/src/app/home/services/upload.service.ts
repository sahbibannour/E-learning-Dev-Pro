import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  PushUpload(data:any){
    console.log(data);
    return this.http.post('http://localhost:3000/upload/file',data );
  }
}
