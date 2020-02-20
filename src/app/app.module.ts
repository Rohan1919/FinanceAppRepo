import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SportComponent } from './sport/sport.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentoptionsComponent } from './paymentoptions/paymentoptions.component';
import { EmioptionsComponent } from './emioptions/emioptions.component';
import { EmipaymentComponent } from './emipayment/emipayment.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    SportComponent,
    MobileComponent,
    LaptopComponent,
    ContactComponent,
    PaymentoptionsComponent,
    EmioptionsComponent,
    EmipaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
