import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutsComponent } from '../abouts/abouts.component';

const routes:Routes = [
  {
    path:'',
    component:AboutsComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AboutsRoutingModule { }
