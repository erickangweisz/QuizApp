import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  visible: boolean;

  constructor() {
    this.visible = false;
  }

  hide(): void {
    this.visible = false;
  }

  show(): void {
    this.visible = true;
  }
}
