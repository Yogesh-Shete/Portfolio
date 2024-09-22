import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: 'about', component: AboutMeComponent },
  // { path: '**', redirectTo: 'about' } // Redirect to about page for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }