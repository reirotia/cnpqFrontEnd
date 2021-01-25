import { LoginComponent } from './login/login.component';
import { FuncionarioFormComponent } from './funcionarios/funcionario-form/funcionario-form.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncoesFormComponent } from './funcoes/funcoes-form/funcoes-form.component';
import { DepartamentoFormComponent } from './departamentos/departamento-form/departamento-form.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path : 'home' , component: HomeComponent },
  { path : 'login' , component: LoginComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
