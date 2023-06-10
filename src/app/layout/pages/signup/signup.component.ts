import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllserviceService } from 'src/app/shared/allservice.service';
import  swal from 'sweetalert';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private allservice:AllserviceService,private router:Router) { }
register = new FormGroup({
  'username' : new FormControl('',[Validators.required]),
  'password' : new FormControl('',[Validators.required]),
  'firstname' : new FormControl('',[Validators.required]),
  'lastname' : new FormControl('',[Validators.required]),
  'email' : new FormControl('',[Validators.required]),
  'phone' : new FormControl('',[Validators.required]),
})
  ngOnInit(): void {
  }

 saveuser(){
  // this.allservice.generatetoken(this.register.value).subscribe((res)=>{
  //   console.log(res);
  // })
  this.allservice.registeruser(this.register.value).subscribe((res)=>{
    console.log(res);
    swal("REGISTER!","data saved successfully","success");
    this.router.navigate(['/signin'])
  })
 }

}
