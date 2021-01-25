
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FormsModule } from '@angular/forms';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';



@NgModule({
  declarations: [FuncionarioFormComponent, FuncionarioFormComponent, FuncionarioListComponent ],
  imports: [
    CommonModule,
    FormsModule,
    FuncionariosRoutingModule
  ]
})
export class FuncionariosModule { }
