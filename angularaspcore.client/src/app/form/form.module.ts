import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent as FormComponent } from './form.component';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule
  ],
  exports: [FormComponent],
  declarations: [FormComponent]
})
export class FormModule { }
