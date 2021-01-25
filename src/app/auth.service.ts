import { Usuario } from './login/usuario';
import { Observable } from 'rxjs';
import { HttpClient , HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apirUrl: string = "http://localhost:8080";
  clientId: string = "my-angular-app";
  clientSecret: string = "@321Reinaldo";
  obterTokenUrl: string = "http://localhost:8080/oauth/token";
  

  constructor(
    private http: HttpClient
  ) { }
  
  tentarLogar(username: string , password: string): Observable<any>{
    const params = new  HttpParams()
        .set('username', username)
        .set('password' , password)
        .set('grant_type' , 'password')

       const headers = {
         'Autorization': 'Basic' + btoa(`${this.clientId}:${this.clientSecret}`)

        } 
    return this.http.post<any>(this.obterTokenUrl, params.toString(), { headers})
  }

  salvar(usuario: Usuario): Observable<any> {
    return this.http.post<any>('http://localhost:8080/usuarios', usuario);
  }
  
}
