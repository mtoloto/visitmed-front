import { FuseUtils } from "../../fuseUtils";

export class Address {
    id: string;
    name: string;
    zipCode: string;
    street: string;
    neighborhood: string;
    number: number;
    complement: string;
    state: string;
    city: string;
    lat: string;
    long: string;

    constructor(address?) {

        address = address || {};

        this.id = address.id || FuseUtils.generateGUID();
        this.name = address.name || '';
        this.zipCode = address.zipCode || '';
        this.street = address.street || '';
        this.neighborhood = address.neighborhood || '';
        this.number = address.number || '';
        this.complement = address.complement || '';
        this.state = address.state || '';
        this.city = address.city || '';
        this.lat = address.lat || '';
        this.long = address.long || '';
    }
}