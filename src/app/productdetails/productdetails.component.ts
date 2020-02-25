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
  constructor(private service : RegService, private router:Router) { }

  ngOnInit(){
    this.productId = sessionStorage.getItem('productId')
    this.productName = sessionStorage.getItem('productName')
    this.price = sessionStorage.getItem('productPrice')

  
}
  purchase(){

    if(sessionStorage.getItem("userName")!=null ){
    alert(JSON.stringify(sessionStorage.getItem("userName")))
    this.router.navigate(['purchase'])}
    else
    {alert(JSON.stringify(sessionStorage.getItem("userName")))
    this.router.navigate(['userlogin'])}


  }
}