import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AllserviceService {

  constructor(private httpclient:HttpClient) { }

  public loginStatusSubject = new Subject<boolean>();

  public generatetoken(body:any){
    return this.httpclient.post(`${baseUrl}/generate-token`,body);
  }
  public getCurrentUser(){
    console.log("this is a current user");
    return this.httpclient.get(`${baseUrl}/current-user`) 
   }
  public setToken(token:any){
    localStorage.setItem('token',token);
  }
    public gettoken(){
      return localStorage.getItem('token');
    }
    
public setUserToLocal(userdata:string):void{
localStorage.setItem('userdata',JSON.stringify(userdata));
}

 public getuserfromlocal(){
  return localStorage.getItem('userdata');
}

getuser(){
let user = this.getuserfromlocal();
if(user!=null){
  return JSON.parse(user)
}else{
  this.logout();
  return null
}
}

public getUserRole(){
  let userdata = this.getuser();
  let userrole = userdata.authorities[0].authority
  console.log(userrole);
  return userrole
}

public registeruser(register:any){
  return this.httpclient.post(`${baseUrl}/user/`,register);
}

 public  logincreatetoken(token:any){
    return localStorage.setItem("token",token)
  }
 loggedInUSer(){
  let tokenstr = localStorage.getItem('token');
  if(tokenstr==undefined || tokenstr== null || tokenstr == ' '){
    return false 
  }else {
    return true
  }
}
  public logout(){
    localStorage.clear()
  }
}
