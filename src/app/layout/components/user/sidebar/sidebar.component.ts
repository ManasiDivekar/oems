import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllserviceService } from 'src/app/shared/allservice.service';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private category : CategoryService, private allservice:AllserviceService,private router:Router) { }
allcat :any;
  logout(){
 this.allservice.logout();
 this.allservice.loginStatusSubject.next(false);
 this.router.navigate(['/signin'])
  }
  ngOnInit(): void {
    this.category.getallcategory().subscribe((res)=>{    
      this.allcat=res;
      console.log("sidebar category.",this.allcat);
       })  
  }

}
