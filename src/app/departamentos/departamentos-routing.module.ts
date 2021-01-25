
import { DepartamentoFormComponent } from './departamento-form/departamento-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentoListComponent } from './departamento-list/departamento-list.component';

const routes: Routes = [
  { path : 'departamentosLista', component: DepartamentoListComponent },
  { path : 'departamentos', component: DepartamentoFormComponent },
  { path : 'departamentos/:id', component: DepartamentoFormComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentosRoutingModule { }
