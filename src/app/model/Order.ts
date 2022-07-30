import { Item } from "./Item";

export class Order {
    id : number;
    date : Date;
    items : Item[]
    total : number;

    constructor(data : Order){
        this.id = data.id;
        this.date = data.date;
        this.items = [];
        data.items.forEach(i => {
            this.items.push(i);
        });
        this.total = data.total;
    }
}