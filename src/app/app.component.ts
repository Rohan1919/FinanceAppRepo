import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <style>

  

    
  .header {
   
  overflow: hidden;
  background-color: #f1e571;
  padding: 20px 10px;
}

.header a {
  float: left;
  color: rgb(212, 53, 53);
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color:rgb(135, 171, 250);
  color: black;
  
  border: none;
  cursor: pointer;
}


.header-right {
  float: right;
}

  </style>
  
 
  <h1 style="text-align:center">Welcome to  Fin-Sarv</h1>
  <div class="header">
  <a href="#default" class="logo">CompanyLogo</a>
  <div class="header-right">
    <a href="#home">Home</a>
    <a routerLink="contactnow">Contact</a>
    <a href="#about">About</a>
    <a routerLink="userlogin">Login</a>
    <a routerLink="userregister">Register</a>
    <a href="userlogin" >Admin</a>
</div>

</div>

<router-outlet></router-outlet> 

   

    
    
    
   
  `,
  styles: []
})
export class AppComponent {
  title = 'Finance';
}
