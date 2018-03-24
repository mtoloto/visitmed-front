import { Component, OnDestroy } from '@angular/core';
import { SellersService } from '../../sellers.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector   : 'fuse-sellers-main-sidenav',
    templateUrl: './main.component.html',
    styleUrls  : ['./main.component.scss']
})
export class SellersMainSidenavComponent implements OnDestroy
{
    user: any;
    filterBy: string;
    onUserDataChangedSubscription: Subscription;

    constructor(private contactsService: SellersService)
    {
        this.filterBy = this.contactsService.filterBy || 'all';
        this.onUserDataChangedSubscription =
            this.contactsService.onUserDataChanged.subscribe(user => {
                this.user = user;
            });
    }

    changeFilter(filter)
    {
        this.filterBy = filter;
        this.contactsService.onFilterChanged.next(this.filterBy);
    }

    ngOnDestroy()
    {
        this.onUserDataChangedSubscription.unsubscribe();
    }
}
