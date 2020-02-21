import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { User } from './paymentoptions/user';


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
}
