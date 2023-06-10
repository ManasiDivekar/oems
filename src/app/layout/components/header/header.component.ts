import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllserviceService } from 'src/app/shared/allservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private allservice:AllserviceService , private router:Router) {
    
   }
loggedInUser = false;
userstr:any=null;

ngOnInit(): void {
  this.loggedInUser = this.allservice.loggedInUSer();
  this.userstr = this.allservice.getuser();
console.log("user loggedin header",this.loggedInUser,"user in header",this.userstr);
this.allservice.loginStatusSubject.asObservable().subscribe((res)=>{
  console.log("subject..observableresponse ",res);
  this.loggedInUser = this.allservice.loggedInUSer();
  this.userstr = this.allservice.getuser();
  console.log("after observable user loggedin header",this.loggedInUser,"user in header",this.userstr);
})

}

logout(){
  this.allservice.logout();
  this.allservice.loginStatusSubject.next(false);
 this.router.navigate(['/signin']);
}
 

}
