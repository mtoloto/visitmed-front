import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Seller } from './sellers.model';
import { FuseUtils } from '../../../core/fuseUtils';
import { Subject } from 'rxjs/Subject';
import { Globals } from '../../../core/global';
import { HttpClientVisitMed } from '../../../core/services/http.client/http.client';

@Injectable()
export class SellersService implements Resolve<any>
{
    onContactsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
    onSelectedContactsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
    onUserDataChanged: BehaviorSubject<any> = new BehaviorSubject([]);
    onSearchTextChanged: Subject<any> = new Subject();
    onFilterChanged: Subject<any> = new Subject();

    contacts: Seller[];
    user: any;
    selectedContacts: string[] = [];

    searchText: string;
    filterBy: string;

    constructor(private http: HttpClientVisitMed, private global: Globals) {
    }

    /**
     * The Contacts App Main Resolver
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getContacts(),
                this.getUserData()
            ]).then(
                ([files]) => {

                    this.onSearchTextChanged.subscribe(searchText => {
                        this.searchText = searchText;
                        this.getContacts();
                    });

                    this.onFilterChanged.subscribe(filter => {
                        this.filterBy = filter;
                        this.getContacts();
                    });

                    resolve();

                },
                reject
            );
        });
    }

    getContacts(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(this.global.company + '/sellers')
                .then((response: any) => {
 
                    this.contacts = response.body;

                    if (this.searchText && this.searchText !== '') {
                        this.contacts = FuseUtils.filterArrayByString(this.contacts, this.searchText);
                    }

                    this.contacts = this.contacts.map(contact => {
                        return new Seller(contact);
                    });

                    this.onContactsChanged.next(this.contacts);
                    resolve(this.contacts);
                }, reject);
        }
        );
    }

    getUserData(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('api/contacts-user/5725a6802d10e277a0f35724')
                .then((response: any) => {
                    this.user = response;
                    this.onUserDataChanged.next(this.user);
                    resolve(this.user);
                }, reject);
        }
        );
    }

    /**
     * Toggle selected contact by id
     * @param id
     */
    toggleSelectedContact(id) {
        // First, check if we already have that todo as selected...
        if (this.selectedContacts.length > 0) {
            const index = this.selectedContacts.indexOf(id);

            if (index !== -1) {
                this.selectedContacts.splice(index, 1);

                // Trigger the next event
                this.onSelectedContactsChanged.next(this.selectedContacts);

                // Return
                return;
            }
        }

        // If we don't have it, push as selected
        this.selectedContacts.push(id);

        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    }

    /**
     * Toggle select all
     */
    toggleSelectAll() {
        if (this.selectedContacts.length > 0) {
            this.deselectContacts();
        }
        else {
            this.selectContacts();
        }
    }

    selectContacts(filterParameter?, filterValue?) {
        this.selectedContacts = [];

        // If there is no filter, select all todos
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedContacts = [];
            this.contacts.map(contact => {
                this.selectedContacts.push(contact.id);
            });
        }
        else {
            /* this.selectedContacts.push(...
                 this.contacts.filter(todo => {
                     return todo[filterParameter] === filterValue;
                 })
             );*/
        }

        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    }

    updateContact(contact) {
        return new Promise((resolve, reject) => {

            this.http.post('api/contacts-contacts/' + contact.id, { ...contact })
                .then(response => {
                    this.getContacts();
                    resolve(response);
                });
        });
    }

    updateUserData(userData) {
        return new Promise((resolve, reject) => {
            this.http.post('api/contacts-user/' + this.user.id, { ...userData })
                .then(response => {
                    this.getUserData();
                    this.getContacts();
                    resolve(response);
                });
        });
    }

    deselectContacts() {
        this.selectedContacts = [];

        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    }

    deleteContact(contact) {
        const contactIndex = this.contacts.indexOf(contact);
        this.contacts.splice(contactIndex, 1);
        this.onContactsChanged.next(this.contacts);
    }

    deleteSelectedContacts() {
        for (const contactId of this.selectedContacts) {
            const contact = this.contacts.find(_contact => {
                return _contact.id === contactId;
            });
            const contactIndex = this.contacts.indexOf(contact);
            this.contacts.splice(contactIndex, 1);
        }
        this.onContactsChanged.next(this.contacts);
        this.deselectContacts();
    }

}
