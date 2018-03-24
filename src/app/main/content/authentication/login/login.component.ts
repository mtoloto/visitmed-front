import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '../../../../core/services/config.service';
import { fuseAnimations } from '../../../../core/animations';
import { AuthService } from "../../../../core/services/auth/auth.service";
import { ErrorHandleService } from "../../../../core/services/errors/error-handle.service";
import { Router } from '@angular/router'; 

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: fuseAnimations
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loginFormErrors: any;
    error: string = '';

    loading: boolean = false;

    constructor(
        private fuseConfig: FuseConfigService,
        private formBuilder: FormBuilder,
        private auth: AuthService,
        private errorHandle: ErrorHandleService,
        private router: Router
    ) {

        this.fuseConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });

        this.loginFormErrors = {
            email: {},
            password: {}
        };
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required]],
            password: ['', Validators.required]
        });

        this.loginForm.valueChanges.subscribe(() => {
            this.onLoginFormValuesChanged();
        });
    }

    onLoginFormValuesChanged() {
        for (const field in this.loginFormErrors) {
            if (!this.loginFormErrors.hasOwnProperty(field)) {
                continue;
            }

            // Clear previous errors
            this.loginFormErrors[field] = {};

            // Get the control
            const control = this.loginForm.get(field);

            if (control && control.dirty && !control.valid) {
                this.loginFormErrors[field] = control.errors;
            }
        }
    }

    login() {

        this.loading = true;
        this.error = ''; 

        this.auth.login(this.loginForm.value)
            .then(
                res => {
                    this.auth.saveToken(res);
                    this.loading = false;
                    this.router.navigate(["home"]);
                },
                err => {
                    this.error = this.errorHandle.handleFriendlyMessage(err.status);
                    this.loading = false;
                }
            );
    }
}
