import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CalendarEvent } from 'angular-calendar';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Seller } from '../sellers.model';

@Component({
    selector     : 'fuse-sellers-seller-form-dialog',
    templateUrl  : './sellers-form.component.html',
    styleUrls    : ['./sellers-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class SellersContactFormDialogComponent implements OnInit
{
    event: CalendarEvent;
    dialogTitle: string;
    contactForm: FormGroup;
    action: string;
    contact: Seller;

    constructor(
        public dialogRef: MatDialogRef<SellersContactFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any,
        private formBuilder: FormBuilder
    )
    {
        this.action = data.action;

        if ( this.action === 'edit' )
        {
            this.dialogTitle = 'Edit Contact';
            this.contact = data.contact;
        }
        else
        {
            this.dialogTitle = 'New Contact';
            this.contact = new Seller({});
        }

        this.contactForm = this.createContactForm();
    }

    ngOnInit()
    {
    }

    createContactForm()
    {
        return this.formBuilder.group({
            id      : [this.contact.id],
            first_name    : [this.contact.first_name],
            last_name: [this.contact.last_name],
            photo_url  : [this.contact.photo_url]
        });
    }
}
