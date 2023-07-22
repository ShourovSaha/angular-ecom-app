import { NgModule } from "@angular/core";
import { Cart } from "./cart.model";
import { ProductRepository } from "./products.repositiry";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [ProductRepository, StaticDataSource, Cart]
})
export class ModelModule{}