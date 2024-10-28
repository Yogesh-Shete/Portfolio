import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component'; // Import the AboutComponent
import { AppRoutingModule } from './app-routing.module';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { EducationComponent } from './education/education.component'; // Import the AppRoutingModule

@NgModule({
  declarations: [AppComponent, AboutMeComponent, ContactMeComponent, EducationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, // Import the AppRoutingModule
    // RouterModule.forRoot([
    //   { path: '', component: AppComponent }, // Default route
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}