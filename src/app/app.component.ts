import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'myPortfolio';

  constructor(private router: Router) {

  }
  AboutMe() {
    // console.log("Hekko")

    this.router.navigate(['/about'])
  }
}
