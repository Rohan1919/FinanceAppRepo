import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Purchase } from '../purchase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }
  userData;
  userData1;
  userData2;
  userData3;
  productId
  productName
  price
  purchase:Purchase=new Purchase();
  ngOnInit(): void {
    this.productId = sessionStorage.getItem('productId')
    this.productName = sessionStorage.getItem('productName')
    this.price = sessionStorage.getItem('productPrice')
   this.userData= sessionStorage.getItem("userName")
   this.userData1= sessionStorage.getItem("userId")
   this.userData2= sessionStorage.getItem("limit")
   this.userData3= this.userData2-this.price
   

  }
actualpay(){
  
  this.router.navigate(['actualpay'])
}
}

