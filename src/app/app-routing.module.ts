import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component'
import { MainInfoPageComponent } from './main-info-page/main-info-page.component'
import { IndexPageComponent } from './index-page/index-page.component'

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: MainInfoPageComponent },
  { path: 'index', component: IndexPageComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
