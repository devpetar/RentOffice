import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

  
const BACKEND_URL = "http://localhost:8080/"; 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  register(createUserRequest: any): Observable<any> {
    console.log(createUserRequest);
    return this.http.post<[]>(BACKEND_URL + "api/auth/create-user", createUserRequest);
  }

  login(logInRequest: any): Observable<any> {
    return this.http.post<[]>(BACKEND_URL + "api/auth/log-in", logInRequest);
  }
}
