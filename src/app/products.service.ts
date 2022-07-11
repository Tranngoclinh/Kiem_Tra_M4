import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import { Products } from "../app/model/products";
const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'https://62bc057beff39ad5ee1a4693.mockapi.io/api/managestaff/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<Products[]>{
    return this.httpClient.get<Products[]>(apiUrl);
  }
  store(product: Products): Observable<Products> {
    return this.httpClient.post<Products>(apiUrl + '', product);
  }
  update(id: any, product: Products): Observable<Products> {
    return this.httpClient.put<Products>(`${apiUrl}/${id}`, product);
  }
  destroy(id: any): Observable<Products> {
    return this.httpClient.delete<Products>(`${apiUrl}/${id}`);
  }
  show(id: any): Observable<Products> {
    return this.httpClient.get<Products>(`${apiUrl}/${id}`);
  }
  find(id: any): Observable<Products> {
    return this.httpClient.get<Products>(`${apiUrl}/${id}`);
  } 
}
