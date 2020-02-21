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


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'userregister', component:RegistrationComponent},
 { path:'userlogin', component:LoginComponent},
 { path:'tosport', component:SportComponent},
 { path:'tomobile', component:MobileComponent},
 { path:'tolaptop', component:LaptopComponent},
 { path:'contactnow', component:ContactComponent},
 { path:'purchase', component: PaymentoptionsComponent},
 { path:'emi1', component:EmioptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
