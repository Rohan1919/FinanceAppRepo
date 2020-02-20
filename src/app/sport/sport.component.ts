import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  purchase(){
    this.router.navigate(['purchase'])
  }

}
