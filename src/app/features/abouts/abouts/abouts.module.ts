import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutsRoutingModule } from '../abouts-routing/abouts-routing.module';
import { AboutsComponent } from './abouts.component';



@NgModule({
  declarations: [AboutsComponent],
  imports: [
    CommonModule,
    AboutsRoutingModule
  ]
})
export class AboutsModule { }
