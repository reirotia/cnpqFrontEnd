import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from './departamentos/departamento';


@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http: HttpClient) { }

  salvar(departamento: Departamento): Observable<Departamento> {
    return this.http.post<Departamento>('http://localhost:8080/departamentos', departamento);
  }

  getDepartamentos(): Observable<Departamento[]>  {
    return this.http.get<Departamento[]>('http://localhost:8080/departamentos');
  }

  getDepartamentoById(id: number) : Observable<Departamento> {
    return this.http.get<any>(`http://localhost:8080/departamentos/${id}`);
  } 

}
