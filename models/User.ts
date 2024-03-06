import { Address } from "./Address";
import { Company } from "./Company";

export class User {
    constructor(
        public name: string,
        public email: string,
        public company: Company,
        public address: Address
    ) { }
}