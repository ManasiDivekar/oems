import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllserviceService } from 'src/app/shared/allservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private allservice:AllserviceService, private router:Router) { }

  logout(){
    this.allservice.logout();
    this.allservice.loginStatusSubject.next(false);
   this.router.navigate(['signin']);
  }
  ngOnInit(): void {
  }

}
