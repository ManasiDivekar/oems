import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { SigninComponent } from './layout/pages/signin/signin.component';
import { SignupComponent } from './layout/pages/signup/signup.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'mainhome',component:HomeComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  { path: 'admin', loadChildren: () => import('./layout/components/admin/admin.module').then(m => m.AdminModule)},
  { path: 'user', loadChildren: () => import('./layout/components/user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
