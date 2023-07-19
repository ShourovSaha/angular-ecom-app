import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository {

    private _products: Product[] = [];
    private _categories: string[] = [];

    constructor(private dataSource: StaticDataSource) {

        dataSource.getProducts().subscribe(data => {
            this._products = data;
            //get unique categories
            this._categories = data.map(item => item.category)
                .filter((currentValue, index, array) => array.indexOf(currentValue) == index)
                .sort();
        });
    }

    GetProductsByCategory(category: string = null): Product[]{
        return this._products.filter(item => category == null || item.category == category);
    }

    GetProductById(id: number): Product{
        return this._products.find(item => item.id == id);
    }

    GetCategories(): string[]{
        return this._categories;
    }
}