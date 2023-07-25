import { NgModule } from "@angular/core";
import { Cart } from "./cart.model";
import { ProductRepository } from "./products.repositiry";
import { StaticDataSource } from "./static.datasource";
import { Order } from "../model/order.model";
import { OrderRepository } from "../model/order.repository";

@NgModule({
    providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository]
})
export class ModelModule{}