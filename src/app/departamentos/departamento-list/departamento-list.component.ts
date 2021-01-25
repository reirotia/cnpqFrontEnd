import { DepartamentoService } from './../../departamento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from '../departamento';

@Component({
  selector: 'app-departamento-list',
  templateUrl: './departamento-list.component.html',
  styleUrls: ['./departamento-list.component.css']
})
export class DepartamentoListComponent implements OnInit {

  departamentos: Departamento[] = [];
  
  constructor(private service: DepartamentoService, private router: Router ) { }

  ngOnInit(): void {
    this.service.getDepartamentos().subscribe(
      resposta => this.departamentos = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/departamentos'])
  }
}
