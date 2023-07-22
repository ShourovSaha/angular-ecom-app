import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetaileComponent } from "./cartDetails.component";
import { CheckoutComponent } from "./checkOut.component";
import { RouterModule } from "@angular/router";


@NgModule({
    imports: [BrowserModule, FormsModule, ModelModule, RouterModule],
    declarations: [StoreComponent, CartSummaryComponent, CartDetaileComponent, CheckoutComponent],
    exports: [StoreComponent]
})

export class StoreModule{}