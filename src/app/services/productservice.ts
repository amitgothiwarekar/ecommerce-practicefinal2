import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
   providedIn:'root' 
})
export class Productservice {
    showProductUrl='http://localhost:8080/products/showallproducts';
    addProductUrl='http://localhost:8080/products/addproduct';
    constructor(private http:HttpClient){}

    getProducts():Observable<Product[]>{
       return  this.http.get<Product[]>(this.showProductUrl)
    }

    addProduct(product:Product):Observable<string>{
        return this.http.post<string>(this.addProductUrl,product,{responseType:'text'})

    }

}
