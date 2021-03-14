import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './navigation/navbar.component';
import { RouterModule } from '@angular/router';
import { educationComponent } from './education/education.component';
import { careerComponent } from './career/career.component';
import { StarComponent } from './shared/star.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { WhiskeyDashboardComponent } from './whiskey-dashboard/whiskey-dashboard.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    educationComponent,
    careerComponent,
    StarComponent,
    HomeComponent,
    WhiskeyDashboardComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'education', component: educationComponent},
      {path: 'career', component: careerComponent},
      {path: 'whiskey', component: WhiskeyDashboardComponent},
      {path: '**', component: HomeComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
