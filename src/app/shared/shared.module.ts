import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { MarkRequireDirective } from './directive/markRequire/mark-require.directive';
import { ButtonComponent } from './components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { UpperCaseFirstLeterPipe } from '../Pipes/upperCaseFirstLeter/upper-case-first-leter.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    InputComponent,
    MarkRequireDirective,
    ButtonComponent,
    UpperCaseFirstLeterPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [
    InputComponent,
    MarkRequireDirective,
    ButtonComponent,
    MaterialModule,
    UpperCaseFirstLeterPipe,
  ],
})
export class SharedModule {}
