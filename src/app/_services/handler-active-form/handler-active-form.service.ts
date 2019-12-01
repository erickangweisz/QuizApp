import { Injectable } from '@angular/core';

declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class HandlerActiveFormService {

  constructor() {}

  activeRegisterForm(): void {
    $('#login-form-link').removeClass('active');
    $('#register-form-link').addClass('active');
    $('#register-form').delay(100).fadeIn(100);
    $('#login-form').fadeOut(100);
  }

  activeLoginForm(): void {
    $('#register-form-link').removeClass('active');
    $('#login-form-link').addClass('active');
    $('#login-form').delay(100).fadeIn(100);
    $('#register-form').fadeOut(100);
  }
}
