import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { AddquizeComponent } from './addquize/addquize.component';
import { AdminComponent } from './admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AllquestionComponent } from './allquestion/allquestion.component';
import { AllquizeComponent } from './allquize/allquize.component';
import { CategoryComponent } from './category/category.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { UpdatequestionComponent } from './updatequestion/updatequestion.component';
import { UpdatequizeComponent } from './updatequize/updatequize.component';

const routes: Routes = [
{
  path:'',component:AdminComponent,
  children:[
    {
      path:'',component:AdminhomeComponent
    },
    {
      path:'home',component:AdminhomeComponent
    },
    {
      path:'category',component:CategoryComponent
    },
    {
      path:'addcategory',component:AddcategoryComponent
    },
    {
      path:'updatecategory/:category_id',component:UpdatecategoryComponent
    },
    {
      path:'allquize',component:AllquizeComponent
    },
    {
      path:'addquize',component:AddquizeComponent
    },
    {
      path:'updatequize/:quiz_id',component:UpdatequizeComponent
    },
    {
      path:'allquestion/:quiz_id/:title',component:AllquestionComponent
    },
    {
      path:'addquestion/:quiz_id/:title',component:AddquestionComponent
    },
    {
      path:'updatequestion/:question_id',component:UpdatequestionComponent
    },
  ]
},
{
  path:'profile',component:ProfileComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
// {path:'',component:AdminComponent},
// {path:'home',component:AdminhomeComponent},
// {
//   path:'profile',component:ProfileComponent
// },