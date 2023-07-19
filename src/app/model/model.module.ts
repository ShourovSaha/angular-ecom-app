import { NgModule } from "@angular/core";
import { ProductRepository } from "./products.repositiry";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [ProductRepository, StaticDataSource]
})
export class ModelModule{}