import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth, Login } from '../../interfaces/auth';
import { API_TOKEN } from '../../../token/api-token';
import {jwtDecode } from 'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:BehaviorSubject<any> = new BehaviorSubject(null) 
  _httpClient=inject(HttpClient)
  private readonly _URL=inject(API_TOKEN)

  constructor() { }

  registerUser(user:Auth) :Observable<any>{
    return this._httpClient.post(`${this._URL}/auth/signup`,user)
  }

  loginUser(user:Login) :Observable<any>{
    return this._httpClient.post(`${this._URL}/auth/signin`,user)
  }
  
  saveData(){
    if(localStorage.getItem("userToken")){
    return this.userData.next(jwtDecode(localStorage.getItem("userToken")!))
      console.log(this.userData);
    }
  }

  isLoggedInUser(){
    if(localStorage.getItem("userToken")){
    return this.userData.next(jwtDecode(localStorage.getItem("userToken")!))  
    console.log(this.userData);

  }
}


getToken(){
  if(localStorage.getItem("userToken")){
 return localStorage.getItem("userToken")
}
return ''
}


}
