import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllserviceService } from './allservice.service';

@Injectable({
  providedIn: 'root'
})

export class AuthinterceptorInterceptor implements HttpInterceptor {

  constructor(private allapi:AllserviceService) {}
  id:number=0;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const token = this.allapi.gettoken();
    //  req.clone({
    //   setHeaders:{
    //     Authorization : `Bearer ${token}`
    //   }
    //  })
    let authenticate=req;
    this.id=this.id+1;
    const token = this.allapi.gettoken();
    console.log(token,"interceptor");
    console.log(this.id + token!);
    if(token!=null){
      authenticate=authenticate.clone(
        {
          setHeaders:{Authorization:`Bearer ${token}`}
        }
      )
    }
    
    // console.log("this is a interceptor request",req);
    // console.log("token are you here.",token);
    
    return next.handle(authenticate);
  }
}

export const InterceptorProvider = [
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthinterceptorInterceptor,
    multi:true
  }
]