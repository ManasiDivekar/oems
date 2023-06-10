import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllserviceService } from 'src/app/shared/allservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private allservice:AllserviceService , private router:Router) { }
login = new FormGroup({
  'username': new FormControl('',[Validators.required]),
  'password': new FormControl('',[Validators.required])
})
  ngOnInit(): void {
  }
loginuser(login:FormGroup){
 this.allservice.generatetoken(login.value).subscribe((res:any)=>{
  console.log(res);
  this.allservice.setToken(res.token);
  console.log(res.token,"component token");
this.allservice.getCurrentUser().subscribe((userdata:any)=>{
  this.allservice.setUserToLocal(userdata);
  console.log("user",userdata);
  if(this.allservice.getUserRole()=='ADMIN'){
    this.allservice.loginStatusSubject.next(true);
    this.router.navigate(['/admin'])
  }else if(this.allservice.getUserRole()=='NORMAL'){
    this.allservice.loginStatusSubject.next(true);
    this.router.navigate(['/user']);
  }else{
    this.allservice.logout();
  }
})
 })
}
}
