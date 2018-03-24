import { FuseUtils } from "../../fuseUtils";

export class Contact {
    id: string;
    email: string;
    telphone: string;
    celphone: string;
    whatsapp: string;
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;

    constructor(contact?) {

        contact = contact || {};

        this.id = contact.id || FuseUtils.generateGUID();
        this.email = contact.email || '';
        this.telphone = contact.telphone || '';
        this.celphone = contact.celphone || '';
        this.whatsapp = contact.whatsapp || '';
        this.facebook = contact.facebook || '';
        this.twitter = contact.twitter || '';
        this.instagram = contact.instagram || '';
        this.linkedin = contact.linkedin || '';
    }
}