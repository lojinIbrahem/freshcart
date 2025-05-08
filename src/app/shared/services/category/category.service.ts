import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_TOKEN } from '../../../token/api-token';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

private readonly _httpClient=inject(HttpClient)
private readonly _URL=inject(API_TOKEN)

  constructor() { }
  getCategories():Observable<any>{
    return this._httpClient.get(`${this._URL}/categories`)
    }
  
}
