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
import { WhiskeyReviewsComponent } from './whiskey-reviews/whiskey-reviews.component';
import { WhiskeyReviewFormComponent } from './whiskey-review-form/whiskey-review-form.component';
import { WhiskeyDashboardComponent } from './whiskey-dashboard/whiskey-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    educationComponent,
    careerComponent,
    StarComponent,
    HomeComponent,
    WhiskeyReviewsComponent,
    WhiskeyReviewFormComponent,
    WhiskeyDashboardComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'education', component: educationComponent},
      {path: 'career', component: careerComponent},
      {path: 'reviews', component: WhiskeyReviewsComponent},
      {path: 'reviewForm', component: WhiskeyReviewFormComponent},
      {path: 'whiskey', component: WhiskeyDashboardComponent},
      {path: '**', component: HomeComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
