import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent,
         RegisterFormComponent,
         AdminDashboardComponent } from './_components';

import { AuthGuard } from './_guards';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'register', component: RegisterFormComponent},
  { path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'landing' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
