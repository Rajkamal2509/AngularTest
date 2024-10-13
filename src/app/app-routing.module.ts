import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LettersComponent } from './pages/letters/letters.component';

const routes: Routes = [
  {
    path:"login",component:TestComponent
  },
  {
    path:"Letters",component:LettersComponent
  },
  {
    path:"dashboard",component:DashboardComponent
  },
  {
    path:"",redirectTo:"Letters",pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
