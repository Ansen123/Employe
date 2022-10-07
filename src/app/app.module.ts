import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeComponent } from './addemploye/addemploye.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchEmployeComponent } from './search-employe/search-employe.component';

@NgModule({
  declarations: [
    AppComponent,
    AddemployeComponent,
    NavbarComponent,
    SearchEmployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
