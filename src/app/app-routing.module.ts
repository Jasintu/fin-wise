import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authorizedGuard } from './_guard/authorized.guard';
import { AuthComponent } from './auth/auth.component';
import { AccountsComponent } from './accounts/accounts.component';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { CreditCardComponent } from './credit-card/credit-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { 
    path: 'login',
    component: LoginComponent,
  },
  { 
    path: 'recoverpassword', 
    component: RecoverPasswordComponent, 
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ]
  },  
   {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'config', component: ConfigComponent },
      { path: 'cards', component: CreditCardComponent },
    ]
  },  
  { 
    path: '**', 
    redirectTo: '/auth'
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
