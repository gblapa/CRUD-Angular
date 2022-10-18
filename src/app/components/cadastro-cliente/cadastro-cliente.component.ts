import { clientes } from '../clientes.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncoesService } from '../funcoes.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {

  cliente: clientes = {
    nome: ''
  }

  constructor(private router: Router, private funcoesService: FuncoesService) { }

  ngOnInit(): void {
  }

  msgAddCliente() : void {
    this.funcoesService.addCliente(this.cliente).subscribe(() => {
      this.funcoesService.mensagem('Cliente adicionado com sucesso!')
      this.router.navigate(['/clientes'])
    })
  }
}
