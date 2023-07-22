import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartDetaileComponent } from './store/cartDetails.component';
import { CheckoutComponent } from './store/checkOut.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, StoreModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent},
      { path: "cart", component: CartDetaileComponent},
      { path: "checkout", component: CheckoutComponent},
      { path: "**", redirectTo: "/store"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
