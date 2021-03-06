import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { RegService } from '../reg.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productId
  productName;
  price;
  productDetails;
  constructor(private service : RegService, private router:Router) { }

  ngOnInit(){
    this.productId = JSON.parse(sessionStorage.getItem('productId'))
    this.productName = sessionStorage.getItem('productName')
    this.price = JSON.parse(sessionStorage.getItem('productPrice'))
    this.productDetails = sessionStorage.getItem('productDetails')


  
}
  purchase(){

    if(sessionStorage.getItem("userName")!=null ){
    alert("welcome"+JSON.stringify(sessionStorage.getItem("userName")))
    this.router.navigate(['purchase'])}
    else
    {alert("Sorry You are not Login please login first ")
    this.router.navigate(['userlogin'])}


  }
}