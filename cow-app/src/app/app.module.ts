import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CowInfoComponent } from './cow-info/cow-info.component';
import { CowsMothersPageComponent } from './cows-mothers-page/cows-mothers-page.component';
import { HomeComponent } from './home/home.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShowCowsPageComponent } from './show-cows-page/show-cows-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    CheckoutComponent,
    CowInfoComponent,
    CowsMothersPageComponent,
    HomeComponent,
    ProfilePageComponent,
    ReservationPageComponent,
    ShoppingCartComponent,
    ShowCowsPageComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
