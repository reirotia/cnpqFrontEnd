import { FuncoesListaComponent } from './funcoes-lista/funcoes-lista.component';
import { FuncoesFormComponent } from './funcoes-form/funcoes-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : 'funcoes' , component: FuncoesFormComponent},
  { path : 'funcoes/:id' , component: FuncoesFormComponent},
  { path : 'funcoes-lista' , component: FuncoesListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncoesRoutingModule { }
