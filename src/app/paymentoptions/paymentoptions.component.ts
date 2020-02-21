import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentoptions',
  templateUrl: './paymentoptions.component.html',
  styleUrls: ['./paymentoptions.component.css']
})
export class PaymentoptionsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 emi1(){
  this.router.navigate(['emi1'])
 }
}
