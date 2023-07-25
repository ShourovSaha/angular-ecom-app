import { NgModule } from "@angular/core";
import { Cart } from "./cart.model";
import { ProductRepository } from "./products.repositiry";
import { StaticDataSource } from "./static.datasource";
import { Order } from "../model/order.model";
import { OrderRepository } from "../model/order.repository";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "./rest.datasource";

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, Cart, Order, OrderRepository, {provide: StaticDataSource, useClass: RestDataSource}]
})
export class ModelModule{}