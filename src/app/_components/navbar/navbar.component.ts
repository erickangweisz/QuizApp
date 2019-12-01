import { Component, OnInit } from '@angular/core';
import { NavbarService,
         AuthenticationService } from '../../_services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: JSON;
  isLogged: boolean;
  logButtonText: string;

  constructor(
    private navbarService: NavbarService,
    private authService: AuthenticationService
  ) {
      this.currentUser =
        JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.initNavbarService();
  }

  initNavbarService(): void {
    if (this.currentUser) {
      this.navbarService.show();
    } else {
      this.navbarService.hide();
    }
    this.isLogged = this.navbarService.visible;
  }

  logout(): void {
    this.navbarService.hide();
    this.authService.logout();
  }
}
