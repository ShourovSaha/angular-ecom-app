import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/products.repositiry";

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})

export class StoreComponent{

    public selectedCategory: string = null;

    constructor(private productsRepo: ProductRepository){}

    get products(): Product[]{
        return this.productsRepo.GetProductsByCategory(this.selectedCategory);
    }

    get categories(): string[]{
        return this.productsRepo.GetCategories();
    }

    changeCategory(newCategory?: string){
        this.selectedCategory = newCategory;
    }
}