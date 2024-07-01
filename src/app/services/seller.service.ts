import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }
  userSignUp(data:signUp){
    let result= this.http.post('http://localhost:3000/seller',data);
    console.warn("result",result);
    return false;
  }
}
 