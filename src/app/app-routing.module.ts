import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LettersComponent } from './pages/letters/letters.component';
import { TimerComponent } from './pages/timer/timer.component';
import { ComparativeAnalysisComponent } from './pages/comparative-analysis/comparative-analysis.component';
import { VisualmemoryComponent } from './pages/visualmemory/visualmemory.component';
import { SpartialComponent } from './pages/spartial/spartial.component';
import { EmotionalComponent } from './pages/emotional/emotional.component';

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
    path:"timer",component:TimerComponent
  },
  {
    path:"compa",component:ComparativeAnalysisComponent
  },
  {
    path:"visual",component:VisualmemoryComponent
  },
  {
    path:"spartial",component:SpartialComponent
  },
  {
    path:"emotional",component:EmotionalComponent
  },
  {
    path:"",redirectTo:"spartial",pathMatch:"full"
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
