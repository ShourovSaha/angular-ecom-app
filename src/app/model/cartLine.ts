import { Product } from "./product.model";

export class CartLine{

    constructor(public product: Product, public quantity: number){}

    getTotalPrice(): number{
        return this.product.price * this.quantity;
    }
}