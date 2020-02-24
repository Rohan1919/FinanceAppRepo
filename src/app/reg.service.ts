import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { User } from './user';
import { Product } from './product';
import { LoginComponent } from './login/login.component';
import { Login } from './Login';


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



  
  getProduct(productId:number){

    let urll = "http://192.168.13.241:8282/financeproject/getProductDetails/"+productId;
  
    console.log(this.http.get(urll));
    return this.http.get(urll)
    }


    getProductDetails(){

      let urll = "http://192.168.13.241:8282/financeproject/getProductDetails/";
    
      console.log(this.http.get(urll));
      return this.http.get(urll)
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
    
    

  }

