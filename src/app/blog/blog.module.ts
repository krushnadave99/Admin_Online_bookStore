import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { AddeditblogComponent } from './addeditblog/addeditblog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BlogComponent,
    AddeditblogComponent,
  ],
  imports: [
    BlogRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class  BlogModule { }
