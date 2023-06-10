import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AngularmaterialModule } from 'src/app/angularmaterial/angularmaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetquizcComponent } from './getquizc/getquizc.component';
import { RulespageComponent } from './rulespage/rulespage.component';
import { StartexamComponent } from './startexam/startexam.component';
import { AllactivequizComponent } from './allactivequiz/allactivequiz.component';


@NgModule({
  declarations: [
    UserComponent,
    SidebarComponent,
    UserhomeComponent,
    GetquizcComponent,
    RulespageComponent,
    StartexamComponent,
    AllactivequizComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AngularmaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class UserModule { }
