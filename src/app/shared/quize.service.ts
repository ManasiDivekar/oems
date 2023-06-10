import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizeService {

  constructor(private httpclient:HttpClient) { }

getquizeapi(){
  return this.httpclient.get(`${baseUrl}/quiz/`);
}
getquizeid(id:any){
  return this.httpclient.get(`${baseUrl}/quiz/${id}`);
}
getallactivequiz(){
  return this.httpclient.get(`${baseUrl}/quiz/active`)
}
getactivequizeofcategory(id:any){
  return this.httpclient.get(`${baseUrl}/quiz/category/active/${id}`);
}

deletequize(id:any){
  return this.httpclient.delete(`${baseUrl}/quiz/${id}`);
}
postquize(data:any){
  return this.httpclient.post(`${baseUrl}/quiz/`,data);
}
putquize(data:any){
return this.httpclient.put(`${baseUrl}/quiz/`,data);
}
}
