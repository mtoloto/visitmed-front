import { FuseUtils } from '../../../../core/fuseUtils';
import { MatChipInputEvent } from '@angular/material';
import { Address } from '../../../../core/models/address/address.model';
import { Contact } from '../../../../core/models/contact/contact.model';

export class Seller {

    id: string;
    avatar: string;
    name: string;
    handle: string;
    last_name: string;
    rg: string;
    cpf: string;
    Address: Address;
    Contact: Contact;

    constructor(seller?) {
        seller = seller || {};
        this.id = seller.id || FuseUtils.generateGUID();
        this.avatar = seller.avatar || '';
        this.name = seller.name || '';
        this.handle = seller.handle || FuseUtils.handleize(this.name);
        this.last_name = seller.last_name || '';
        this.rg = seller.rg || '';
        this.cpf = seller.cpf || '';
        this.Address = seller.Address || new Address();
        this.Contact = seller.Contact || new Contact();
    }

}
