import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
  ]
})
export class DashboardModule { }
