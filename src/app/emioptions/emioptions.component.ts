import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { RegService } from '../reg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emioptions',
  templateUrl: './emioptions.component.html',
  styleUrls: ['./emioptions.component.css']
})
export class EmioptionsComponent implements OnInit {
 product:Product=new Product();
 emioptions; 
 productId;
 
  constructor(private service : RegService, private router:Router) { }

  ngOnInit() {
    this.productId=sessionStorage.getItem("productId")
    this.service.getProduct(this.productId).subscribe((data)=>{
    console.log(JSON.stringify(data));
    this.product=data;
    })
  }
  payment(){

    this.router.navigate(['payment'])

  }

}
