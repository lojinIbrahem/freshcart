import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_TOKEN } from '../../../token/api-token';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private readonly _httpClient=inject(HttpClient)
private readonly _URL=inject(API_TOKEN)
constructor() { }

getProducts():Observable<any>{
  return this._httpClient.get(`${this._URL}/products`)
}

getUserId(id:string):Observable<any>{
  return this._httpClient.get(`${this._URL}/products/${id}`)
}
}
