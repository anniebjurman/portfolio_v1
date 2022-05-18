import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { ProjectslideComponent } from './projectslide/projectslide.component';
import { ProjectdotsComponent } from './projectdots/projectdots.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    ProjectComponent,
    ProjectdetailComponent,
    HomeComponent,
    ProjectslideComponent,
    ProjectdotsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
