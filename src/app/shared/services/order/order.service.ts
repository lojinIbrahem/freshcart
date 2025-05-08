import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_TOKEN } from '../../../token/api-token';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly _httpClient=inject(HttpClient)
  private readonly _URL=inject(API_TOKEN)
  token:string = JSON.stringify(localStorage.getItem("userToken"))

  constructor() { }
  
  cashOrder(id:string,shippingAddress:{details:string, phone:string ,city:string}):Observable<any>{
    return this._httpClient.post(`${this._URL}/orders/${id}`,{shippingAddress},{
      headers:{
        token:JSON.parse(this.token)
      }
    })
  }

  getAllOrder():Observable<any>{
    return this._httpClient.get(`${this._URL}/orders`)
  }

  getUserOrders(id:string):Observable<any>{
    return this._httpClient.get(`${this._URL}/orders/user/${id}`)
  }

  onlineOrder(id:string,shippingAddress:{details:string, phone:string ,city:string}):Observable<any>{
    return this._httpClient.post(`${this._URL}/orders/checkout-session/${id}?url=http://localhost:3000`,{shippingAddress},{
      headers: {
        token:JSON.parse(this.token)
      }
    })
  }



}
