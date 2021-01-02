import { Component } from '@angular/core';

@Component({
  selector:    'nav-bar',
  templateUrl: './navbar.component.html'
})
export class NavComponent {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}

