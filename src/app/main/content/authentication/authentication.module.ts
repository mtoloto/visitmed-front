import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes = [
    {
        path     : 'login',
        component: LoginComponent
        
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class AuthenticationModule
{

}
