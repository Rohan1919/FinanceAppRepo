import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { RegService } from '../reg.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-add-detail',
  templateUrl: './admin-add-detail.component.html',
  styleUrls: ['./admin-add-detail.component.css']
})
export class AdminAddDetailComponent implements OnInit {
product:Product=new Product();
  constructor(private http:HttpClient, private router:Router, private service:RegService) { }

  ngOnInit(): void {
  }
  productsubmit(){
    alert(JSON.stringify(this.product));
    this.service.addProd(this.product);
    this.router.navigate(['/adminpage']);
  }
}
