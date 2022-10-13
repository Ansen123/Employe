import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeComponent } from './addemploye/addemploye.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchEmployeComponent } from './search-employe/search-employe.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {
    path:"",component:AddemployeComponent
  },
  {
    path:"search",component:SearchEmployeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddemployeComponent,
    NavbarComponent,
    SearchEmployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
