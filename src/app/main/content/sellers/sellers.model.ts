import { FuseUtils } from '../../../core/fuseUtils';
import { Address } from '../../../core/models/address/address.model';
import { Contact } from '../../../core/models/contact/contact.model';

export class Seller {

    id: string;
    avatar: string;
    name: string;
    lastName: string;
    rg: string;
    cpf: string;
    Address: Address;
    Contact: Contact;

    constructor(contact) {
        {
            this.id = contact.id || FuseUtils.generateGUID();
            this.name = contact.name || '';
            this.lastName = contact.lastName || '';
            this.avatar = contact.avatar || 'assets/images/avatars/profile.jpg';
            this.rg = contact.nickname || '';
            this.cpf = contact.company || '';
            this.Address = contact.Address || new Address();
            this.Contact = contact.Contact || new Contact();
        }
    }
}
