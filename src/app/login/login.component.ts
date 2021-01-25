import { Observable } from 'rxjs';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username: string = '';
  password: string = '';
  logginError: boolean = false;
  cadastrando: boolean = false;

  constructor(private service: AuthService,  private router: Router) { }

  onSubmit()  {
    //this.router.navigate(['/home'])
    
    this.service.tentarLogar(this.username, this.password)
      .subscribe(response => {
        this.router.navigate(['/home'])
      } , erroResponse => {
        this.router.navigate(['/funcionarios'])
      }
      )
      
  }

  preparaCadastrar(event: any) {
    event.preventDefault();
    this.cadastrando = true;
  }
  
  cancelaCadastro() {
    this.cadastrando = false;
  }
  cadastrar() {
    const USUARIO: Usuario = new Usuario();
    USUARIO.username = this.username;
    USUARIO.pasword = this.password;
    this.service.salvar(USUARIO).subscribe(
      resposta => {
        this.router.navigate(['/home']);        
      }
    )

  }
}
