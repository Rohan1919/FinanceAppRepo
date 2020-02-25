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

  addUser(user:User){
    let url = "http://192.168.13.241:8282/financeproject/registration";
    this.http.post(url,user).subscribe((data)=>{
      console.log(data);
    })
  }


  CommanUrl:String="http://192.168.13.241:8282/financeproject";
  
  getProduct(productId){

    let urll = this.CommanUrl+"/getProductDetails";
  
   // console.log(this.http.get(urll));
    return this.http.post(urll,productId)
    }


    getProductDetails(product:Product){

      let urll = this.CommanUrl+"/getProductDetailsByType";
    
     // console.log(this.http.get(urll));
      return this.http.post(urll,product);
  
      
      }


      addProd(product:Product){
        let url = "http://192.168.13.241:8282/financeproject/setProductDetails";
        this.http.post(url,product).subscribe((data)=>{
          console.log(data);
        })
      }
      login(login:Login){
        let url="http://192.168.13.241:8282/financeproject/login";
    return this.http.post(url,login);
 
         // sessionStorage.setItem('username',user.userName);
          //sessionStorage.setItem('password',user.password);
        //   console.log(data);
        // })
      }
    userData1;
      schedules(userData1){
        console.log(userData1);
        
        let url="http://192.168.13.241:8282/financeproject/schedules";
    return this.http.post(url,userData1);
 
         // sessionStorage.setItem('username',user.userName);
          //sessionStorage.setItem('password',user.password);
        //   console.log(data);
        // })
      }

      buyproducts(user:User){
        let url="http://192.168.13.241:8282/financeproject/buyProducts";
        return this.http.post(url,user);
 
      }
    
    
    
        addPayment(purchase:Purchase){
          let url = "http://192.168.13.241:8282/financeproject/purchaseProduct";
          this.http.post(url,purchase).subscribe((data)=>{
            console.log(data);
          })
        }


  }

