import { FuseUtils } from "../../fuseUtils";

export class User {
    id: string;
    email: string;
    enabled: string;

    constructor(user?) {

        user = user || {};

        this.id = user.id || '';
        this.email = user.email || '';
        this.enabled = user.enabled || ''; 
    }
}