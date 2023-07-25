import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order{

    public id: number;
    public name: string;
    public  address: string;
    public city: string;
    public shipped: boolean = false;

    constructor(public cartService: Cart){}

    clear(){
        this.id = this.name = this.address = this.city = null;
        this.shipped = false;
        this.cartService.clearCart();
    }
}