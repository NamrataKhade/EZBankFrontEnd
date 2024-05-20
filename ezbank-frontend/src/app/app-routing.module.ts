import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { LoanComponent } from './loan/loan.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [  
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegistrationComponent },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'account', component: AccountComponent },
{ path: 'loan', component: LoanComponent },
{ path: 'card', component: CardComponent },
{ path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
