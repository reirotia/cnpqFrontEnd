import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { DepartamentoFormComponent } from './departamento-form/departamento-form.component';
import { FormsModule } from '@angular/forms';
import { DepartamentoListComponent } from './departamento-list/departamento-list.component';


@NgModule({
  declarations: [DepartamentoFormComponent, DepartamentoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    DepartamentosRoutingModule
  ] , exports: [
    DepartamentoFormComponent
  ]
})
export class DepartamentosModule { }
