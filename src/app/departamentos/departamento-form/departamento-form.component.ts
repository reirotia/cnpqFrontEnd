import { Observable } from 'rxjs';
import { DepartamentoService } from './../../departamento.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { Departamento } from '../departamento';
import { ParamMap ,Router , ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-departamento-form',
  templateUrl: './departamento-form.component.html',
  styleUrls: ['./departamento-form.component.css']
})
export class DepartamentoFormComponent implements OnInit {

  departamento: Departamento = new Departamento();
  sucess: boolean = false;
  error: boolean = false;
  errors:  string[] = [];
  
  
  constructor(private service: DepartamentoService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
      
    }


  ngOnInit(): void {
/*
    const id = this.activatedRoute.params['id'];
    console.log(this.id);
    
    
    /*
    let id2: string  = this.activatedRoute.snapshot.
    queryParamMap.get('firstParamKey');
    /*
    this.activatedRoute.queryParams
      .filter(params => params.order)
      .subscribe(params => {
        console.log(params); // { order: "popular" }

      }
    /*
    let params = this.activatedRoute.params;
    if ( params && params.value && params.value.id){
     console.log(id);
      this.id = params.value.id;
      console.log(id);
    }
    */
    
  }

  voltarParaListar(){
    this.router.navigate(['/departamentosLista']);
  }

  onSubmit(){
    this.service.salvar(this.departamento)
    .subscribe( response => {
      this.sucess = true;
      this.error = false;
      this.departamento = response
    } , errorResponse => {
      this.sucess=false;
      this.error = true
      this.router.navigate(['/login']);
       console.log(errorResponse.error.errors)
        
    } 
    )
  }
  
}
