import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SportComponent } from './sport/sport.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentoptionsComponent } from './paymentoptions/paymentoptions.component';
import { EmioptionsComponent } from './emioptions/emioptions.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { PurchasepaymentComponent } from './purchasepayment/purchasepayment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminAddDetailComponent } from './admin-add-detail/admin-add-detail.component';
import { AboutComponent } from './about/about.component';
import { ActualpaymentComponent } from './actualpayment/actualpayment.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'userregister', component:RegistrationComponent},
 { path:'userlogin', component:LoginComponent},
 { path:'tosport', component:SportComponent},
 { path:'tomobile', component:MobileComponent},
 { path:'tolaptop', component:LaptopComponent},
 { path:'contactnow', component:ContactComponent},
 { path:'productdetail', component: ProductdetailsComponent},
 { path:'emi1', component:EmioptionsComponent},
 { path:'adminlogin', component:AdminloginComponent},
 { path:'purchase', component:PaymentoptionsComponent},
 { path:'payment', component:PurchasepaymentComponent},
 { path:'dashboard', component:DashboardComponent},
 { path:'adminpage', component:AdminpageComponent},
 { path:'addproduct', component:AdminAddDetailComponent},
 { path:'about', component:AboutComponent},
 { path:'actualpay', component:ActualpaymentComponent}
 

/*{ path:'emioption', component;EmioptionsComponent} */ 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
