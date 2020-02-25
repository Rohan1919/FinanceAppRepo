import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegService } from '../reg.service';
import { User } from '../user';
import { Schedules } from '../Schedules';
import { Purchase } from '../purchase';

@Component({
  selector: 'app-purchasepayment',
  templateUrl: './purchasepayment.component.html',
  styleUrls: ['./purchasepayment.component.css']
})
export class PurchasepaymentComponent implements OnInit {
user:User=new User();

schedules:Schedules=new Schedules();
  userData;
userData1;
userData2;
purchase:Purchase=new Purchase();
  constructor(private router:Router, private service:RegService) { }

  ngOnInit(): void {
  }

  dashboard(){
    this.purchase.userId=JSON.parse(sessionStorage.getItem("userId"));
    this.purchase.productId=JSON.parse(sessionStorage.getItem("productId"));
    this.purchase.totalAmount=JSON.parse(sessionStorage.getItem("productPrice"));
    this.service.addPayment(this.purchase);
    console.log(sessionStorage.getItem("userId"));
     
    this.user.userId=JSON.parse(sessionStorage.getItem("userId"));
    this.service.buyproducts(this.user);
    this.service.schedules(this.user);
    
    this.service.schedules(this.schedules).subscribe((data)=>{
     /* this.userData = JSON.stringify(data.userName)
      this.userData1 = JSON.stringify(data.userId)
      this.userData2= JSON.stringify(data.limit)*/
     // alert( this.userData = JSON.stringify(data))
     this.userData=data
     alert(this.userData)
    
      if(this.userData!=[]){
        alert( this.userData = JSON.stringify(data))
         /* sessionStorage.setItem("userName",this.userData);
          sessionStorage.setItem("userId",this.userData1);
          sessionStorage.setItem("limit",this.userData2);*/
    
          alert("welcome user")
          this.router.navigate(['dashboard']);
      }

    
  });
}
}
 


