import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualpayment',
  templateUrl: './actualpayment.component.html',
  styleUrls: ['./actualpayment.component.css']
})
export class ActualpaymentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate([''])
  }
  dash(){
    this.router.navigate(['dashboard'])
  }
  }

