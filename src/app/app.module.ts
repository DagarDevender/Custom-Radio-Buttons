import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Everty time when using routing or first step for routing
import { RouterModule, } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes = [{path:'', component:HomeComponent},
{path:'home', component:HomeComponent}];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
