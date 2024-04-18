import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'account', component: AccountComponent},
  {path: 'account/:id', component: AccountDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    AccountDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
