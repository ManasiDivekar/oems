import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AngularmaterialModule } from 'src/app/angularmaterial/angularmaterial.module';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { AllquizeComponent } from './allquize/allquize.component';
import { AddquizeComponent } from './addquize/addquize.component';
import { UpdatequizeComponent } from './updatequize/updatequize.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { AllquestionComponent } from './allquestion/allquestion.component';
import { UpdatequestionComponent } from './updatequestion/updatequestion.component';


@NgModule({
  declarations: [
    AdminComponent,
    ProfileComponent,
    SidebarComponent,
    AdminhomeComponent,
    CategoryComponent,
    AddcategoryComponent,
    UpdatecategoryComponent,
    AllquizeComponent,
    AddquizeComponent,
    UpdatequizeComponent,
    AddquestionComponent,
    AllquestionComponent,
    UpdatequestionComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularmaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ]
})
export class AdminModule { }
