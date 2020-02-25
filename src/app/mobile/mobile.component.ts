import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegService } from '../reg.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor(private service : RegService, private router:Router) { }
  productId:number;
  ngOnInit(): void {
  }
  purchase(){
    this.router.navigate(['productdetail'])
  }

}
