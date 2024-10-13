import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './pages/test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserdetailComponent } from './pages/userdetail/userdetail.component';
import { BackGround } from './pages/CustomDirectives/background.directive';
import { HighlightDirective } from './pages/CustomDirectives/highlight.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LettersComponent } from './pages/letters/letters.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DashboardComponent,
    UserdetailComponent,
    BackGround,
    HighlightDirective,
    LettersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
