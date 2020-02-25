import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegService } from '../reg.service';
import { PurchasepaymentComponent } from '../purchasepayment/purchasepayment.component';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  productList 
  product : Product = new  Product();
  constructor(private http: HttpClient, private service: RegService,private router:Router) { }
 
   ngOnInit(){
     this.product.productType="mobile"
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
 
          this.router.navigate(['productdetail'])
        });
        //sessionStorage.setItem("productId",productid)
         
     }
}
