import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { RegService } from '../reg.service';
import { Router } from '@angular/router';
import { Purchase } from '../purchase';

@Component({
  selector: 'app-emioptions',
  templateUrl: './emioptions.component.html',
  styleUrls: ['./emioptions.component.css']
})
export class EmioptionsComponent implements OnInit {
 product:Product=new Product();
 emioptions; 
 productId;
 price;
 purchase:Purchase = new Purchase();

  constructor(private service : RegService, private router:Router) { }

  ngOnInit() {
    this.price = sessionStorage.getItem('productPrice')
   // this.productId=sessionStorage.getItem("productId")
    this.service.getProduct(this.productId).subscribe((data)=>{
    console.log(JSON.stringify(data));
    this.product=data;
    })
  }
  payment(){

    sessionStorage.setItem("tperiod",this.purchase.tenturePeriod)
    this.router.navigate(['payment'])

  }

}
