import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { stringify } from '@angular/compiler/src/util';
import { RegService } from '../reg.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  ngOnInit(): void {
    
  }
  
    productId:number;
    
     constructor(private service : RegService, private router:Router) { }
   
    
     details(productId){
      this.router.navigate(['productdetail'])
    }
    }