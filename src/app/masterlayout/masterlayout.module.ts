import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterlayoutComponent } from './masterlayout.component';
import { MasterlayoutRoutingModule } from './masterlayout-routing.module';

@NgModule({
  declarations: [
    MasterlayoutComponent,
  ],
  imports: [
    MasterlayoutRoutingModule,
    CommonModule,
  ]
})
export class  MasterlayoutModule { }
