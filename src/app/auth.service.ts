import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginInfo, LoginUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(user: LoginInfo) {
    return this.httpClient.post<LoginUser>(environment.apiUrl + '/api/users/login', { user });
  }

  setToken(token: string) {
    localStorage.setItem('userToken', token);
  }

  getToken() {
    return localStorage.getItem('userToken');
  }
}
