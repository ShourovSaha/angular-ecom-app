import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/products.repositiry";

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})

export class StoreComponent{

    constructor(private productsRepo: ProductRepository){}

    get products(): Product[]{
        return this.productsRepo.GetProductsByCategory();
    }

    get categories(): string[]{
        return this.productsRepo.GetCategories();
    }
}