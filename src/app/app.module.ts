import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LogoOverlayComponent } from './logo-overlay/logo-overlay.component';
import { LateralOverlayComponent } from './lateral-overlay/lateral-overlay.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ContactComponent,
    CarrouselComponent,
    RedesSocialesComponent,
    LoginComponent,
    SignupComponent,
    ProductSectionComponent,
    ProductsComponent,
    LogoOverlayComponent,
    LateralOverlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
