import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllactivequizComponent } from './allactivequiz/allactivequiz.component';
import { GetquizcComponent } from './getquizc/getquizc.component';
import { RulespageComponent } from './rulespage/rulespage.component';
import { StartexamComponent } from './startexam/startexam.component';
import { UserComponent } from './user.component';
import { UserhomeComponent } from './userhome/userhome.component';


const routes: Routes = [{ path: '',component:UserComponent,
children:[
  {
    path:'',
    component:UserhomeComponent
  },
  {
    path:'userhome',
    component:UserhomeComponent
  },
  {
    path:'allquiz',
    component:AllactivequizComponent
  },
  {
    path:'getquiz/:category_id',
    component:GetquizcComponent
  },
  {
    path:'rules/:quiz_id',
    component:RulespageComponent
  },
]},
{
  path:'startexam/:quiz_id',
  component:StartexamComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
