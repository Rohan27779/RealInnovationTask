import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InnovationTask';
  employeeHeading: string = 'Employee List';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.employeeHeading = event.urlAfterRedirects.includes('/add-details') ? 'Add employee details' : 'Employee List';
      }
    });
  }
}
