import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './container/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';

import {PassengerDashboardService} from "./passenger-dashboard.service";
import {HttpModule} from "@angular/http";
import {PassengerViewerComponent} from "./container/passenger-viewer/passenger-viewer.component";

import {PassengerFormComponent} from "./container/passenger-form/passenger-form.component";


const routes: Routes = [
  {
    path: 'passengers',
    children: [
      { path: '', component: PassengerDashboardComponent },
      { path: ':id', component: PassengerViewerComponent }
    ]
  }
];

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerViewerComponent,
    PassengerFormComponent

  ],

  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],

  providers: [
    PassengerDashboardService
  ]

})

export class PassengerDashboardModule {



}
