import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { User } from './user';
import { Product } from './product';
import { LoginComponent } from './login/login.component';
import { Login } from './Login';
import { Schedules } from './Schedules';
import { Purchase } from './purchase';


@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private http:HttpClient) { }
  CommanUrl:String="http://localhost:8383/financeproject";
  addUser(user:User){
    let url = this.CommanUrl+"/registration";
    this.http.post(url,user).subscribe((data)=>{
      console.log(data);

    })
  }


 
  
  getProduct(product:Product){

    let urll = this.CommanUrl+"/getProductDetails";
  
   // console.log(this.http.get(urll));
    return this.http.post(urll,product)
    }


    getProductDetails(product:Product){

      let urll = this.CommanUrl+"/getProductDetailsByType";
    console.log("from here"+JSON.stringify(product));
     // console.log(this.http.get(urll));
      return this.http.post(urll,product);
  
      
      }


      addProd(product:Product){
        let url = this.CommanUrl+"/setProductDetails";
        return this.http.post(url,product);
      }
      login(login:Login){
        let url=this.CommanUrl+"/login";
    return this.http.post(url,login);
 
         // sessionStorage.setItem('username',user.userName);
          //sessionStorage.setItem('password',user.password);
        //   console.log(data);
        // })
      }
    userData1;
      schedules(userData1){
        console.log("user data =====>>>",userData1);
        
        let url=this.CommanUrl+"/schedules";
        return this.http.post(url,userData1);
 
         // sessionStorage.setItem('username',user.userName);
          //sessionStorage.setItem('password',user.password);
        //   console.log(data);
        // })
      }

      buyproducts(user:User){
        let url=this.CommanUrl+"/buyProducts";
        return this.http.post(url,user);
 
      }
    
    
      
        addPayment(purchasedata:Purchase){
          console.log("I'm in purchase");
          
          let url = "http://localhost:8383/financeproject/purchaseProduct";
          
          this.http.post(url,purchasedata).subscribe((data)=>{
            console.log(data);
      
          })
      //  this.http.post(url,purchasedata);


  }

}