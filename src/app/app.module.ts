import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartDetailsComponent } from './store/cartDetails.compomnent';
import { CheckoutComponent } from './store/checkOut.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';
import { StoreFirstGuard } from './storeFirst.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, StoreModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard]},
      { path: "cart", component: CartDetailsComponent, canActivate: [StoreFirstGuard]},
      { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard]},
      { path: "**", redirectTo: "/store"}
    ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
