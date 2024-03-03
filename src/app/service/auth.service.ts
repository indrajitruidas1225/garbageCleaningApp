import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(credentials: { email: string; password: string; }):Observable<any>{

    const loginUrl = "http://localhost:3000/login"
    return this.http.post(loginUrl,credentials)

  }
}
