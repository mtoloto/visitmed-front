import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Globals } from '../../global';
import * as decode from 'jwt-decode'
import { user as userModel } from '../../models/user';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class HttpClientVisitMed {

    headers: HttpHeaders;

    constructor(private http: HttpClient, private global: Globals, private auth: AuthService) {
        this.setHeaders();
    }


    setHeaders() {
        var token = this.auth.getToken();
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
    }


    post(method, body) {
        return new Promise((resolve, reject) => {
            this.http.post(this.global.api + method, JSON.stringify(body), { headers: this.headers, observe: "response" })
                .subscribe((res: HttpResponse<any>) => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    put(method, body) {
        return new Promise((resolve, reject) => {
            this.http.put(this.global.api + method, JSON.stringify(body), { headers: this.headers, observe: "response" })
                .subscribe((res: HttpResponse<any>) => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }


    get(method) {
        return new Promise((resolve, reject) => {
            var token = this.auth.getToken();
            this.http.get(this.global.api + method, { headers: this.headers, observe: "response" })
                .subscribe((res: HttpResponse<any>) => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
