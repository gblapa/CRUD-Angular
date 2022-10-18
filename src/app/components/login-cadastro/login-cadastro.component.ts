import { Component, OnInit } from '@angular/core';
import { login } from '../login.model';
import { FuncoesService } from '../funcoes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.scss']
})
export class LoginCadastroComponent implements OnInit {
  
  
  login: login = {
    email: '',
    user: '',
    senha: ''
  }


  constructor(private router: Router, private funcoesService: FuncoesService) { }

  msgAddPerfil() : void {
    this.funcoesService.addPerfil(this.login).subscribe(() => {
      this.funcoesService.mensagem('Perfil cadastrado com sucesso!')
      // this.router.navigate(['/perfil'])
    })
  }
  ngOnInit(): void {
  }

}
