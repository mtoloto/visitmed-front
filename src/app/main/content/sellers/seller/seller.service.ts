import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClientVisitMed } from '../../../../core/services/http.client/http.client';
import { Globals } from '../../../../core/global';

@Injectable()
export class SellerService implements Resolve<any>
{
    routeParams: any;
    seller: any;
    onSellerChanged: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(
        private http: HttpClientVisitMed,
        private global: Globals
    ) {
    }

    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getSeller()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getSeller(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.routeParams.id === 'new') {
                this.onSellerChanged.next(false);
                resolve(false);
            }
            else {
                this.http.get(this.global.company + '/sellers/' + this.routeParams.id)
                    .then((response: any) => {
                        this.seller = response.body;
                        this.onSellerChanged.next(this.seller);
                        resolve(response);
                    }, reject);
            }
        });
    }

    saveSeller(seller) {
        return new Promise((resolve, reject) => {
            this.http.put(this.global.company + '/sellers', seller)
                .then((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    addSeller(seller) {
        return new Promise((resolve, reject) => {
            this.http.post(this.global.company + '/sellers', seller)
                .then((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
}
