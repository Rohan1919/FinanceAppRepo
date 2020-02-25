import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
purchasetype1(productId:number){
   this.router.navigate(['tosport'])
   sessionStorage.setItem("productId",stringify(productId));
  
 
}

purchasetype2(productId:number){
  this.router.navigate(['tomobile'])
  sessionStorage.setItem("productId",stringify(productId));
}


purchasetype3(productId:number){
  this.router.navigate(['tolaptop'])
  sessionStorage.setItem("productId",stringify(productId));
}
}