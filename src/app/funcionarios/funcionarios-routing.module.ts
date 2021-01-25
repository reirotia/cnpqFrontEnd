import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';

const routes: Routes = [
  { path : 'funcionarios' , component: FuncionarioFormComponent},
  { path : 'funcionariosLista' , component: FuncionarioListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
