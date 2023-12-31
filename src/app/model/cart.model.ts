import { Injectable } from "@angular/core";
import { CartLine } from "./cartLine";
import { Product } from "./product.model";

@Injectable()
export class Cart {

    public cartLine: CartLine[] = [];
    public itemCount: number = 0;
    public totalPrice: number = 0;

    constructor() {

    }

    addToCart(product: Product, quantity: number = 1) {

        let cartProduct = this.cartLine.find(item => item.product.id == product.id);

        if (cartProduct != undefined) {
            cartProduct.quantity += quantity;
        }
        else {
            this.cartLine.push(new CartLine(product, quantity));
        }

        this.recalculate();
    }

    updateQuantity(id: number, event: Event) {

        let cartProduct = this.cartLine.find(item => item.product.id == id);

        if (cartProduct != undefined) {
            cartProduct.quantity += Number((event.target as HTMLInputElement).value);
        }

        this.recalculate();
    }

    removeProduct(id: number) {

        let cartIndex = this.cartLine.findIndex(item => item.product.id == id);
        if (cartIndex > -1) {
            this.cartLine.splice(cartIndex, 1);
        }
        this.recalculate();
    }

    recalculate() {
        this.itemCount = 0;
        this.totalPrice = 0;

        this.cartLine.forEach(item => {
            this.itemCount += item.quantity;
            this.totalPrice += (item.product.price * item.quantity);
        });
    }

    clearCart() {
        this.itemCount = 0;
        this.totalPrice = 0;
        this.cartLine = [];
    }
}