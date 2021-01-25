import { FuncoesService } from './../../funcoes.service';
import { FuncoesModule } from './../funcoes.module';
import { Funcao } from './../funcao';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcoes-lista',
  templateUrl: './funcoes-lista.component.html',
  styleUrls: ['./funcoes-lista.component.css']
})
export class FuncoesListaComponent implements OnInit {

  funcoes: Funcao[] = [];

  constructor(
    private service: FuncoesService , 
    private router: Router ) {}

  ngOnInit(): void {
     this.service.getFuncoes().subscribe(
       resposta => this.funcoes = resposta);
  }

  novoCadastro() {
    this.router.navigate(['/funcoes'])
  }

}
