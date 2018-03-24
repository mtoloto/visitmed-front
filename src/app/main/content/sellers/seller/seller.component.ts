import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { SellerService } from './seller.service';
import { fuseAnimations } from '../../../../core/animations';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import { Subscription } from 'rxjs/Subscription';
import { Seller } from '../sellers.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseUtils } from '../../../../core/fuseUtils';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';
import { ZipCodeService } from '../../../../core/services/zipCode.service';

@Component({
    selector: 'fuse-e-commerce-seller',
    templateUrl: './seller.component.html',
    styleUrls: ['./seller.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class SellerComponent implements OnInit, OnDestroy {
    seller = new Seller();
    onSellerChanged: Subscription;
    pageType: string;
    sellerForm: FormGroup;

    constructor(
        private sellerService: SellerService,
        private formBuilder: FormBuilder,
        public snackBar: MatSnackBar,
        private location: Location,
        private zipCode: ZipCodeService
    ) {

    }

    ngOnInit() {
        // Subscribe to update seller on changes
        this.onSellerChanged =
            this.sellerService.onSellerChanged
                .subscribe(seller => {

                    if (seller) {
                        this.seller = new Seller(seller);
                        this.pageType = 'edit';
                    }
                    else {
                        this.pageType = 'new';
                        this.seller = new Seller();
                    }

                    this.sellerForm = this.createSellerForm();
                });
    }

    createSellerForm() {
        return this.formBuilder.group({
            id: [this.seller.id],
            photo_url: [this.seller.photo_url],
            first_name: [this.seller.first_name],
            last_name: [this.seller.last_name],
            rg: [this.seller.rg],
            cpf: [this.seller.cpf],
            email: [this.seller.Contact.email],
            address: this.formBuilder.group(this.seller.Address),
            contact: this.formBuilder.group(this.seller.Contact),
            user: this.formBuilder.group({
                email: [this.seller.User.email]
            })
        });
    }

    saveSeller() {
        const data = this.sellerForm.getRawValue();
        console.log(data);
        //data.handle = FuseUtils.handleize(data.name);
        this.sellerService.saveSeller(data)
            .then(() => {

                // Trigger the subscription with new data
                this.sellerService.onSellerChanged.next(data);

                // Show the success message
                this.snackBar.open('Seller saved', 'OK', {
                    verticalPosition: 'top',
                    horizontalPosition: 'right',
                    duration: 2000
                });
            });
    }

    deleteSeller() {
        const data = this.sellerForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);
        this.sellerService.saveSeller(data)
            .then(() => {

                // Trigger the subscription with new data
                this.sellerService.onSellerChanged.next(data);

                // Show the success message
                this.snackBar.open('Seller saved', 'OK', {
                    verticalPosition: 'top',
                    duration: 2000
                });
            });
    }

    addSeller() {
        const data = this.sellerForm.getRawValue();
        // data.handle = FuseUtils.handleize(data.name);
        this.sellerService.addSeller(data)
            .then((res) => {

                // Trigger the subscription with new data
                this.sellerService.onSellerChanged.next(data);

                // Show the success message
                this.snackBar.open('Seller added', 'OK', {
                    verticalPosition: 'top',
                    duration: 2000
                });

                // Change the location with new one
                this.location.go('sellers/' + this.seller.id);
            }, (err) => {

            });
    }

    ngOnDestroy() {
        this.onSellerChanged.unsubscribe();
    }

    getAddress() {

        let formSellerAddress = this.sellerForm.get("address");

        this.zipCode.getAddress(formSellerAddress.get("zipCode").value).then((res: any) => {
            console.log(res)
            formSellerAddress.get("street").setValue([res.body.logradouro]);
            formSellerAddress.get("neighborhood").setValue(res.body.bairro);
            formSellerAddress.get("state").setValue(res.body.uf);
            formSellerAddress.get("city").setValue(res.body.localidade);
        }, (err) => {
            console.log(err);
        });



    }


}
