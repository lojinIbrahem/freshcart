import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { API_TOKEN } from '../../../token/api-token';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  _httpClient=inject(HttpClient)
private readonly _URL=inject(API_TOKEN)
token:string = JSON.stringify(localStorage.getItem("userToken"))

  constructor() { }

  addProductToCart(productId:string):Observable<any>{
    return this._httpClient.post(`${this._URL}/cart`,{productId},{
      headers:{
        token:JSON.parse(this.token)
      }
      })
  }

  updateCartProduct(productId:string,count:string):Observable<any>{
    return this._httpClient.put(`${this._URL}/cart/${productId}`,{count},{
      headers:{
        token:JSON.parse(this.token)
            }
    })
  }

  getCart():Observable<any>{
    return this._httpClient.get(`${this._URL}/cart`,{
      headers:{
        token:JSON.parse(this.token)
      }
    })
  }

  removeCart(productId:string):Observable<any>{
    return this._httpClient.delete(`${this._URL}/cart/${productId}`,{
      headers:{
        token:JSON.parse(this.token)
      }
    })
  }

  clearCart():Observable<any>{
    return this._httpClient.delete(`${this._URL}/cart`,{
      headers:{
        token:JSON.parse(this.token)
      }
    })
  }

}
