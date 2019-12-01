import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppConfigModule } from './app-config.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,
         HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { AppComponent } from './app.component';
import { NavbarComponent } from './_components';
import { LoginFormComponent } from './_components';
import { LandingComponent } from './_components';
import { AdminDashboardComponent } from './_components';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppConfigModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    LandingComponent,
    AdminDashboardComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
