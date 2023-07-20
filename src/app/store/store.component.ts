import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/products.repositiry";

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})

export class StoreComponent {

    public selectedCategory: string = null;
    public productPerPage: number = 5;
    public selectedPageIndex: number = 1;

    constructor(private productsRepo: ProductRepository) { }

    get products(): Product[] {
        let pageIndex = (this.selectedPageIndex - 1) * this.productPerPage;

        let a = this.productsRepo.GetProductsByCategory(this.selectedCategory)
        .slice(pageIndex, pageIndex + this.productPerPage);

        return this.productsRepo.GetProductsByCategory(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productPerPage);
    }

    get categories(): string[] {
        return this.productsRepo.GetCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPageIndex: number) {
        this.selectedPageIndex = newPageIndex;
    }

    changePageSize(event: Event){
        this.productPerPage = Number((event.target as HTMLInputElement).value);
        this.changePage(1);
    }

    get pageNumbers(): number[]{
        return Array(Math.ceil(this.productsRepo.GetProductsByCategory(this.selectedCategory).length / this.productPerPage))
                    .fill(0)
                    .map((x, index) => index + 1);               
    }
}