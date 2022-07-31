import { Order } from './Order';

export class UserModel {
  id: number = 0;
  displayName: string = '';
  email: string = '';
  password: string = '';
  address: string = '';
  balance: number = 0;
  orders: Order[] = [];

  constructor() {
    // if (data) {
    //   this.id = 10001;
    //   this.displayName = data.displayName;
    //   this.email = data.email;
    //   this.password = data.password;
    //   this.address = data.address;
    //   this.balance = 10000;
    //   this.orders = [];
    //   data.orders.forEach(i => {
    //     this.orders.push(i);
    //   })
    // } else {
    //   this.id = 0;
    //   this.displayName = '';
    //   this.email = '';
    //   this.password = '';
    //   this.address = '';
    //   this.balance = 0;
    //   this.orders = [];
    // }
  }
}
