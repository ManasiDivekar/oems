import { Component, OnInit } from '@angular/core';
import { AllserviceService } from 'src/app/shared/allservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private allservice:AllserviceService) {
    this.getuser();
   }
userdata:any;
  getuser(){
    this.allservice.getCurrentUser().subscribe((res)=>{
      this.userdata=res;
      console.log(this.userdata);
      
    })
  }
  ngOnInit(): void {
  }

}
