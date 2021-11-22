import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(private http: HttpClient) {}

  
  public login(correo: string, password: string): Observable<any> {
    const body = { correo, password }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    const options = {
      headers: headers
    };
    return this.http.post(`http://localhost:8080/api/auth/login`, body, options)
  }

}

export const AuthService_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
