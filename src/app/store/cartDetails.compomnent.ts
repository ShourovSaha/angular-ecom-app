import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
    templateUrl: "cartDetails.Component.html"
})

export class CartDetailsComponent { 

    constructor(public cartService: Cart){}
}

