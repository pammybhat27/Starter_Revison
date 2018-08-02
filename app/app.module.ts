import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PassengerDashboardModule} from './passenger-dashboard/passenger-dashboard.module';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./not-found.component";

const routes :Routes = [{
  path: '' ,redirectTo:'passengers',pathMatch: 'full'

},
  {
    path: '**' ,component:NotFoundComponent

  }];
@NgModule({

declarations: [
  AppComponent,
  HomeComponent,
  NotFoundComponent
],
bootstrap:[AppComponent],

  imports: [
    // angular module
    BrowserModule,
    CommonModule,
    //custom module
    PassengerDashboardModule,
    RouterModule.forRoot(routes,{useHash:true}),

  ]

})

export class AppModule {


}

