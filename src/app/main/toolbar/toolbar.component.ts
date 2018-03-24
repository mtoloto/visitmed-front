import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { FuseConfigService } from '../../core/services/config.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { user } from '../../core/models/user';
import { toolbarViewModel } from '../../core/models/toolbar/toolbarViewModel';
import { toObservable } from '@angular/forms/src/validators';
import { FuseConfirmDialogComponent } from '../../core/components/confirm-dialog/confirm-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
    selector: 'fuse-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})

export class FuseToolbarComponent {
    userStatusOptions: any[];
    languages: any;
    selectedLanguage: any;
    showLoadingBar: boolean;
    horizontalNav: boolean;
    user: user;
    toolbar: toolbarViewModel;

    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

    constructor(
        private router: Router,
        private fuseConfig: FuseConfigService,
        private translate: TranslateService,
        private auth: AuthService,
        public dialog: MatDialog
    ) {

        this.initToolBarModel();
        this.user = this.auth.getUser();

        if (this.user != null) {
            this.toolbar.username = this.user.username;
        }

        this.userStatusOptions = [
            {
                'title': 'Online',
                'icon': 'icon-checkbox-marked-circle',
                'color': '#4CAF50'
            },
            {
                'title': 'Away',
                'icon': 'icon-clock',
                'color': '#FFC107'
            },
            {
                'title': 'Do not Disturb',
                'icon': 'icon-minus-circle',
                'color': '#F44336'
            },
            {
                'title': 'Invisible',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#BDBDBD'
            },
            {
                'title': 'Offline',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#616161'
            }
        ];

        this.languages = [
            {
                'id': 'en',
                'title': 'English',
                'flag': 'us'
            },
            {
                'id': 'tr',
                'title': 'Turkish',
                'flag': 'tr'
            }
        ];

        this.selectedLanguage = this.languages[0];

        router.events.subscribe(
            (event) => {
                if (event instanceof NavigationStart) {
                    this.showLoadingBar = true;
                }
                if (event instanceof NavigationEnd) {
                    this.showLoadingBar = false;
                }
            });

        this.fuseConfig.onSettingsChanged.subscribe((settings) => {
            this.horizontalNav = settings.layout.navigation === 'top';
        });

    }

    search(value) {
        // Do your search here...
        console.log(value);
    }

    setLanguage(lang) {
        // Set the selected language for toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this.translate.use(lang.id);
    }

    /**
    * Delete Contact
    */
    logout() {
        this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
            disableClose: false
        });

        this.confirmDialogRef.componentInstance.confirmMessage = 'Tem certeza que deseja sair?';
        this.confirmDialogRef.componentInstance.confirmTitle = 'Logout';
        

        this.confirmDialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.auth.removeToken();
                this.router.navigate(['auth', 'login']);
            }
            this.confirmDialogRef = null;
        });

    }

    initToolBarModel() {
        this.toolbar = new toolbarViewModel();
        this.toolbar.username = '';
    }
}
