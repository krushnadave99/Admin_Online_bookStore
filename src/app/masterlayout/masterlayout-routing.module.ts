import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterlayoutComponent } from './masterlayout.component';


const routes: Routes = [
    { path: '', component: MasterlayoutComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterlayoutRoutingModule { }
