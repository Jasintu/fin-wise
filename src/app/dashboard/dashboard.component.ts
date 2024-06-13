import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  activeRoute: string | null = null;
  setActive(route: string): void {
    this.activeRoute = route;
  }
}
