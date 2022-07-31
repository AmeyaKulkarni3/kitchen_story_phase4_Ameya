import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { FoodItemListComponent } from './food-item-list/food-item-list.component';
import { FoodItemComponent } from './food-item-list/food-item/food-item.component';
import { CartComponent } from './cart/cart.component';
import { PurchaseComponent } from './purchase/purchase.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderItemComponent } from './order-list/order-item/order-item.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FoodItemListAdminComponent } from './food-item-list-admin/food-item-list-admin.component';
import { FoodItemAdminComponent } from './food-item-list-admin/food-item-admin/food-item-admin.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddItemComponent } from './add-item/add-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { RemoveItemComponent } from './remove-item/remove-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    UserHomeComponent,
    UserAccountComponent,
    FoodItemListComponent,
    FoodItemComponent,
    CartComponent,
    PurchaseComponent,
    OrderListComponent,
    OrderItemComponent,
    AdminHomeComponent,
    FoodItemListAdminComponent,
    FoodItemAdminComponent,
    ChangePasswordComponent,
    AddItemComponent,
    UpdateItemComponent,
    RemoveItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  entryComponents:[UpdateItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
