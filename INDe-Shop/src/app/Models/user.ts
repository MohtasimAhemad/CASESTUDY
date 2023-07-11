import { Address } from "./address";

export interface User {
    id:string;
    userName:string;
    password:string;
    email:string;
    mobileNo:string;
    address:Address;
    role:string;

}
