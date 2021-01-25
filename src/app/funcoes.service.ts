import { FuncoesModule } from './funcoes/funcoes.module';
import { Funcao } from './funcoes/funcao';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncoesService {

  constructor(private http: HttpClient) { }


  salvar(funcao: Funcao): Observable<Funcao> {
      return this.http.post<Funcao>('http://localhost:8080/funcoes', funcao);
  }

  getFuncoes(): Observable<Funcao[]>  {
    return this.http.get<Funcao[]>('http://localhost:8080/funcoes');
  }
}
