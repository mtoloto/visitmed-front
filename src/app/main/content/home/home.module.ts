import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { FuseWidgetModule } from '../../../core/components/widget/widget.module';
import { HttpClientVisitMed } from "../../../core/services/http.client/http.client";


const routes: Routes = [
    {
        path: '**',
        component: HomeComponent,
        resolve: {
            data: HomeService
        }
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        FuseWidgetModule,
        NgxChartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        })
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
        HomeService,
        HttpClientVisitMed
    ]
})
export class HomeModule {
}

