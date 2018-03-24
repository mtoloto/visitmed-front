import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SellerService implements Resolve<any>
{
    routeParams: any;
    seller: any;
    onSellerChanged: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(
        private http: HttpClient
    )
    {
    }

    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {

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

    getSeller(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            if ( this.routeParams.id === 'new' )
            {
                this.onSellerChanged.next(false);
                resolve(false);
            }
            else
            {
                this.http.get('api/contacts-contacts/' + this.routeParams.id)
                    .subscribe((response: any) => {
                        this.seller = response;
                        this.onSellerChanged.next(this.seller);
                        resolve(response);
                    }, reject);
            }
        });
    }

    saveSeller(seller)
    {
        return new Promise((resolve, reject) => {
            this.http.post('api/e-commerce-sellers/' + seller.id, seller)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    addSeller(seller)
    {
        return new Promise((resolve, reject) => {
            this.http.post('api/e-commerce-sellers/', seller)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
}
