import { FuncionarioService } from './../../funcionario.service';
import { DepartamentoService } from './../../departamento.service';
import { Funcao } from './../../funcoes/funcao';
import { Funcionario } from './../funcionario';
import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { FuncoesService } from '../../funcoes.service'
import { Departamento } from 'src/app/departamentos/departamento';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  funcionario: Funcionario = new Funcionario();
  funcoes: Funcao[] = [];
  departamentos: Departamento[] = [];
  sucess: boolean = false;
  error: boolean = false;
  errors:  string[] = [];

  constructor(private service: FuncionarioService,
    private serviceFuncao:  FuncoesService, 
    private router: Router,
    private serviceDepartamento: DepartamentoService
    ) { }

  ngOnInit(): void {
    this.serviceFuncao.getFuncoes().subscribe(
      resposta => this.funcoes = resposta);
      this.serviceDepartamento.getDepartamentos().subscribe(
        resposta => this.departamentos = resposta);
  }

  onSubmit(){
    console.log(this.funcionario)
    
    this.service.salvar(this.funcionario)
    .subscribe( response => {
      this.sucess = true;
      this.error = false;
      this.funcionario = response
    } , errorResponse => {
      this.sucess=false;
      this.error = true
      this.router.navigate(['/login']);
      this.router.navigate(['/login']);
      console.log(errorResponse.error)
        
    } 
    )
    
  }

  voltarParaListar(){
    
  }
  

}
