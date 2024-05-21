import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { AddeditauthorComponent } from './addeditauthor/addeditauthor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthorComponent,
    AddeditauthorComponent,
  ],
  imports: [
    AuthorRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class  AuthorModule { }
