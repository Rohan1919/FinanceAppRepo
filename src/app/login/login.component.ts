import { Component, OnInit } from '@angular/core';
import { RegService } from '../reg.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from '../Login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData;
  userData1;
  userData2;
  user;
  constructor( private service : RegService,private router:Router) { }
   login:Login=new Login();
   
  ngOnInit(): void {
  }
 
  doLogin(){
    // alert(JSON.stringify(this.login));
    //  this.service.login(this.login);
  //this.userData = JSON.stringify(data.login)
    // 
 this.service.login(this.login).subscribe((data)=>{
  this.userData = JSON.stringify(data.userName)
  this.userData1 = JSON.stringify(data.userId)
  this.userData2= JSON.stringify(data.limit)
  alert(JSON.stringify(data.userName))
  
 

  if(this.userData1!=-1){
      sessionStorage.setItem("userName",this.userData)
      sessionStorage.setItem("userId",this.userData1)
      sessionStorage.setItem("limit",this.userData2)

      this.user=sessionStorage.getItem("userId")
      
      alert("welcome user")
      this.router.navigate(['dashboard']);
    }
  else{
     alert("invalid user")
    }
   });

  }
}
