import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegService } from '../reg.service';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
  productList 
  product : Product = new  Product();
  constructor(private http: HttpClient, private service: RegService,private router:Router) { }
 
   ngOnInit(){
     this.product.productType = "sport"
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
          sessionStorage.setItem('productUrl',data.productUrl.toString())
          sessionStorage.setItem('productDetails',data.productDetails.toString())


 
          this.router.navigate(['productdetail'])
        });
        //sessionStorage.setItem("productId",productid)
         
     }
}
