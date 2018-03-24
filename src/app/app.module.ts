import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { FuseConfigService } from './core/services/config.service';
import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { FuseSampleModule } from './main/content/sample/sample.module';
import { TranslateModule } from '@ngx-translate/core';
import { AuthGuard } from "./core/guards/auth.guard";
import { LoginGuard } from "./core/guards/login.guard";
import { AuthService } from "./core/services/auth/auth.service";
import { Globals } from './core/global';
import { ErrorHandleService } from "./core/services/errors/error-handle.service";
import { TokenInterceptor } from './core/interceptor/token.interceptor';
import { MaterialModule } from './core/modules/material.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FuseFakeDbService } from './fuse-fake-db/fuse-fake-db.service';
const appRoutes: Routes = [
    {
        path: 'auth',
        loadChildren: './main/content/authentication/authentication.module#AuthenticationModule',
        canActivate: [LoginGuard]
    },
    {
        path: 'home',
        loadChildren: './main/content/home/home.module#HomeModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'propagandistas',
        loadChildren: './main/content/sellers/sellers.module#SellersModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'perfil',
        loadChildren: './main/content/profile/profile.module#ProfileModule',
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    exports: [
        MaterialModule
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        SharedModule,
        TranslateModule.forRoot(),
        FuseMainModule,
        FuseSampleModule,
        InMemoryWebApiModule.forRoot(FuseFakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),
    ],
    providers: [
        FuseSplashScreenService,
        FuseConfigService,
        FuseNavigationService,
        AuthGuard,
        LoginGuard,
        AuthService,
        Globals,
        ErrorHandleService/* ,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        } */
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
