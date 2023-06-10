import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private  httpclient:HttpClient) { }

  getallcategory(){
    return this.httpclient.get(`${baseUrl}/category/`)
  }

  getcategoryid(id:any){
  return this.httpclient.get(`${baseUrl}/category/${id}`);
  }
 
  postcategory(data:any){
    return this.httpclient.post(`${baseUrl}/category/`,data);
  }
 
  putcategory(data:any){
    return this.httpclient.put(`${baseUrl}/category/`,data);
  }

  deletecategory(id:any){
  return this.httpclient.delete(`${baseUrl}/category/${id}`);
  }
}
