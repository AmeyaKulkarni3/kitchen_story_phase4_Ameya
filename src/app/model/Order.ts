import { Cart } from "./Cart";
import { CartItem } from "./CartItem";

export class Order {
    id : number = 0;
    date : Date;
    cart : CartItem[] = [];
    orderValue : number = 0;

    constructor(){
        
    }
}