import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Order } from "../model/order.model";
import { OrderRepository } from "../model/order.repository";

@Component({
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.css"]
})

export class CheckoutComponent{

    orderSent: boolean = false;
    submitted: boolean = false;

    constructor(public order: Order, public orderRepo: OrderRepository){}

    submitOrder(form: NgForm){
        this.submitted = true;
        if(form.valid){
            this.orderRepo.saveOrder(this.order).subscribe(data => {
                this.order.clear();
                this.submitted = false;
                this.orderSent = true;
            });
        }
    }
}