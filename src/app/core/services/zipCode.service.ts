import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Globals } from '../global';
import * as decode from 'jwt-decode'
import { Address } from '../models/address/address.model';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ZipCodeService {

    headers: HttpHeaders;

    constructor(private http: HttpClient) { } 

    getAddress(zipCode) {
        return new Promise((resolve, reject) => {
            this.http.get("https://viacep.com.br/ws/" + zipCode + "/json/", { observe: "response" })
                .subscribe((res: HttpResponse<any>) => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
