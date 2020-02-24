import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { RegService } from '../reg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product: Product;
   
  constructor(private service : RegService, private router:Router) { }

  ngOnInit(){

}

  purchase(){
      this.productId=sessionStorage.getItem("productId")
       this.service.getProductDetails().subscribe((data)=>{
        console.log(JSON.stringify(data));
        //this.product=data;
        return data
      });
    this.router.navigate(['purchase'])

  }



}