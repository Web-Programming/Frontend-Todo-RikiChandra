import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'frontend';
  selectedPage = 'login';

  constructor(private router: Router) {

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        if (event.url === '/login') {
          this.selectedPage = 'login';

        } else if (event.url === '/register') {
          this.selectedPage = 'register';

        } else if (event.url === '/todo') {
          this.selectedPage = 'todo';
        }

      }
    });

  }

}
