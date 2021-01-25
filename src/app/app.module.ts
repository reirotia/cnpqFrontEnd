import { AuthService } from './auth.service';
import { DepartamentoService } from './departamento.service';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { DepartamentosModule } from './departamentos/departamentos.module';
import { FuncoesService } from './funcoes.service';
import { FuncoesModule } from './funcoes/funcoes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TemplateModule,
    FuncoesModule,
    FuncionariosModule,
    DepartamentosModule,
    AppRoutingModule
  ],
  providers: [
    FuncoesService,
    DepartamentoService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
