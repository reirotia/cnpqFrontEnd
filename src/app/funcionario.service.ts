import { Funcionario } from './funcionarios/funcionario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
constructor(private http: HttpClient) { }


salvar(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>('http://localhost:8080/funcionarios', funcionario);
}

getFuncionario(): Observable<Funcionario[]>  {
  return this.http.get<Funcionario[]>('http://localhost:8080/funcionarios');
}

}
