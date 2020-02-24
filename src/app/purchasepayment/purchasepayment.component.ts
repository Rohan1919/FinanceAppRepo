import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchasepayment',
  templateUrl: './purchasepayment.component.html',
  styleUrls: ['./purchasepayment.component.css']
})
export class PurchasepaymentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  dashboard(){
    this.router.navigate(['dashboard'])
  }
}
