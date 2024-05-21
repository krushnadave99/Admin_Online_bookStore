import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookcategoriesComponent } from './bookcategories.component';
import { BookcategoriesRoutingModule } from './bookcategories-routing.module';
import { AddeditbookcategoriesComponent } from './addeditbookcategories/addeditbookcategories.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookcategoriesComponent,
    AddeditbookcategoriesComponent,
  ],
  imports: [
    BookcategoriesRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class  BookcategoriesModule { }
