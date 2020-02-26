import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegService } from '../reg.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor( private service : RegService,private router:Router) { }
   user:User=new User();
   reg;
  ngOnInit(): void {
  
  // this.service.addUser(this.user).subscribe((data)=>{
  //   this.reg=data;
  //   console.log(this.reg)
  //   alert(this.reg);

  // }) 
}
registersubmit(){
   // alert(JSON.stringify(this.user));
   
   if(this.user.address!=null&&this.user.name!=null&&this.user.email!=null&&this.user.phoneNumber!=null&&this.user.userName!=null&&this.user.password!=null&&this.user.panCardNumber!=null&&this.user.aadharCardNumber!=null)
   {this.service.addUser(this.user)
  if(this.reg="true")
   this.router.navigate(['/userlogin']);
   }
    else
    alert("enter fields")
  }
}
