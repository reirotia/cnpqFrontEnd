import { FuncoesService } from './../../funcoes.service';
import { Funcao } from './../funcao';
import { Component, OnInit } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { of, throwError, Observable } from 'rxjs';
import { Router , ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-funcoes-form',
  templateUrl: './funcoes-form.component.html',
  styleUrls: ['./funcoes-form.component.css']
})
export class FuncoesFormComponent implements OnInit {

  funcao: Funcao;
  sucess: boolean = false;
  error: boolean = false;
  errors:  string[] = [];
  id: number= 0;

  constructor(
    private service: FuncoesService , 
    private router: Router, 
    private activatedRoute: ActivatedRoute ) { 
    this.funcao = new Funcao();
  }

  ngOnInit(): void {
    
  }

  voltarParaListar(){
    this.router.navigate(['/funcoes-lista']);
  }

  onSubmit(){
    this.service.salvar(this.funcao)
    .subscribe( response => {
      this.sucess = true;
      this.error = false;
      this.funcao = response
    } ,  errorResponse => {
      this.sucess=false;
      this.error = true
      this.router.navigate(['/login']);
       console.log(errorResponse.error.errors)
       
       
    }
    )
  }
}
