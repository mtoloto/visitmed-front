import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Globals } from '../../global';
import * as decode from 'jwt-decode'
import { user as userModel } from '../../models/user';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private global: Globals) { }


  login(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json');
      this.http.post(this.global.api + 'login', JSON.stringify(credentials), { headers: headers, observe: "response" })
        .subscribe((res: HttpResponse<any>) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveToken(data) {
    var token = data.headers.get("authorization");
    localStorage.setItem("token", token);
  }

  removeToken() {
    localStorage.removeItem("token");
  }

  getToken() {
    var token = localStorage.getItem("token");
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  getUser(): userModel {

    const token = this.getToken();

    try {

      const decoded = decode(token);
      if (decoded.exp === undefined) return null;

      var user = new userModel();
      user.username = decoded.userName;

      return user;

    } catch (exp) {
      // console.log(exp);
      return null;
    }

  }

  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken();
    if (!token) return true;
    try { 
      const date = this.getTokenExpirationDate(token);
      if (date === undefined) return false;
      return !(date.valueOf() > new Date().valueOf());
    } catch (exp) {
      return true;
    }
  }

}
