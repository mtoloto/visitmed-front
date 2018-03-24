import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { SellersMainSidenavComponent } from './sidenavs/main/main.component';
import { SellersComponent } from './sellers.component';
import { SellersService } from './sellers.service';
import { SellersListComponent } from './sellers-list/sellers-list.component';
import { SellersSelectedBarComponent } from './selected-bar/selected-bar.component';
import { SellersContactFormDialogComponent } from './sellers-form/sellers-form.component';
import { SellerService } from './seller/seller.service';
import { SellerComponent } from './seller/seller.component';
import { ZipCodeService } from '../../../core/services/zipCode.service';
import { HttpClientVisitMed } from '../../../core/services/http.client/http.client';

const routes: Routes = [
    {
        path: ':id',
        component: SellerComponent,
        resolve: {
            data: SellerService
        }
    },
    {
        path: '**',
        component: SellersComponent,
        resolve: {
            contacts: SellersService
        }
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        SellersComponent,
        SellerComponent,
        SellersListComponent,
        SellersSelectedBarComponent,
        SellersMainSidenavComponent,
        SellersContactFormDialogComponent
    ],
    providers: [
        SellersService,
        SellerService,
        ZipCodeService,
        HttpClientVisitMed
    ],
    entryComponents: [SellersContactFormDialogComponent]
})

export class SellersModule {
}
