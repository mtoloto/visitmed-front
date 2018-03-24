import { FuseUtils } from '../../../core/fuseUtils';
import { Address } from '../../../core/models/address/address.model';
import { Contact } from '../../../core/models/contact/contact.model';
import { User } from '../../../core/models/user/user.model';

export class Seller {

    id: string;
    photo_url: string;
    first_name: string;
    last_name: string;
    rg: string;
    cpf: string;
    Address: Address;
    Contact: Contact;
    User: User;

    constructor(contact?) {
        {
            contact = contact || {};
            this.id = contact.id || '';
            this.first_name = contact.first_name || '';
            this.last_name = contact.last_name || '';
            this.photo_url = contact.photo_url || 'src/assets/images/photo_urls/profile.jpg';
            this.rg = contact.rg || '';
            this.cpf = contact.cpf || '';
            this.Address = contact.Address || new Address();
            this.Contact = contact.Contact || new Contact();
            this.User = contact.user || new User();
        }
    }
}
