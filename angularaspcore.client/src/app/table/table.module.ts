import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent as TableComponent } from './table.component';
import { FormModule } from '../form/form.module';

@NgModule({
  imports: [
    CommonModule,
    TableRoutingModule,
    FormModule
  ],
  declarations: [TableComponent]
})
export class TableModule { }
