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
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ActualpaymentComponent } from './actualpayment/actualpayment.component';
import { PurchasepaymentComponent } from './purchasepayment/purchasepayment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CatogoryhomeComponent } from './catogoryhome/catogoryhome.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminAddDetailComponent } from './admin-add-detail/admin-add-detail.component';
import { AboutComponent } from './about/about.component';


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
    EmipaymentComponent,
    AdminloginComponent,
    ActualpaymentComponent,
    PurchasepaymentComponent,
    DashboardComponent,
    ProductdetailsComponent,
    CatogoryhomeComponent,
    AdminpageComponent,
    AdminAddDetailComponent,
    AboutComponent,
  
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
