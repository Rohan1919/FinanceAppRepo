import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { stringify } from '@angular/compiler/src/util';
import { RegService } from '../reg.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
 
 productList 
 product : Product = new  Product();
 constructor(private http: HttpClient, private service: RegService,private router:Router) { }

  ngOnInit(){
    this.product.productType = "laptop"
   this.service.getProductDetails(this.product).subscribe(data=> {
      this.productList =data;
      console.log(data)
    })
   
    
  }
  
 
  details(productid){
      this.product.productId = productid
       this.service.getProduct(this.product).subscribe((data)=>{
         console.log(data.productId.toString())
         sessionStorage.setItem('productId',data.productId.toString())
         sessionStorage.setItem('productName',data.productName.toString())
         sessionStorage.setItem('productPrice',data.price.toString())
         sessionStorage.setItem('productDetails',data.productDetails.toString())


         this.router.navigate(['productdetail'])
       });
       //sessionStorage.setItem("productId",productid)
        
    }
    }