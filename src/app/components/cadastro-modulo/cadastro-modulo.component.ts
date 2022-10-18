import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncoesService } from '../funcoes.service';
import { modulos } from '../modulos.model';

@Component({
  selector: 'app-cadastro-modulo',
  templateUrl: './cadastro-modulo.component.html',
  styleUrls: ['./cadastro-modulo.component.scss']
})
export class CadastroModuloComponent implements OnInit {


  modulo: modulos = {
    nome: '',
    status: ''
  }
  constructor(private router: Router, private funcoesService: FuncoesService) { }

  ngOnInit(): void {
  }


  msgAddCliente() : void {
    this.funcoesService.addModulo(this.modulo).subscribe(() => {
      this.funcoesService.mensagem('Módulo adicionado com sucesso!')
      this.router.navigate(['/modulos'])
    })
  }
}
