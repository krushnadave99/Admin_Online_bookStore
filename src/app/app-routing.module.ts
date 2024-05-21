import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MasterlayoutComponent } from './masterlayout/masterlayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MasterlayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'contactus',
        loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule),
      },
      {
        path: 'author',
        loadChildren: () => import('./author/author.module').then(m => m.AuthorModule),
      },
      {
        path: 'payment',
        loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule),
      },
      {
        path: 'book',
        loadChildren: () => import('./book/book.module').then(m => m.BookModule),
      },
      {
        path: 'bookcategories',
        loadChildren: () => import('./bookcategories/bookcategories.module').then(m => m.BookcategoriesModule),
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
