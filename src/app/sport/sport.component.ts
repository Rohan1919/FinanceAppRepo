import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegService } from '../reg.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  constructor(private service : RegService, private router:Router) { }
  productId:number;
  ngOnInit(): void {
  }
  purchase(productId){
    this.router.navigate(['productdetail'])
  }


  
}
