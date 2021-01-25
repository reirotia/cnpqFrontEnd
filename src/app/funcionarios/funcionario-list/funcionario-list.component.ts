import { FuncionarioService } from './../../funcionario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  constructor(private service: FuncionarioService, private router: Router) { }

  ngOnInit(): void {
    this.service.getFuncionario().subscribe(
      resposta => this.funcionarios = resposta);
  }

  pesquisarFuncionario(){
    
  }

}
