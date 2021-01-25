import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncoesRoutingModule } from './funcoes-routing.module';
import { FuncoesFormComponent } from './funcoes-form/funcoes-form.component';
import { FormsModule } from '@angular/forms';
import { FuncoesListaComponent } from './funcoes-lista/funcoes-lista.component';


@NgModule({
  declarations: [FuncoesFormComponent, FuncoesListaComponent],
  imports: [
    CommonModule,
    FuncoesRoutingModule,
    FormsModule
  ], exports: [
    FuncoesListaComponent,
    FuncoesFormComponent
  ]
})
export class FuncoesModule { }
