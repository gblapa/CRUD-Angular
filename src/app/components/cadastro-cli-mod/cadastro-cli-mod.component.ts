import { modcliente } from './../modcliente.model';
import { Router } from '@angular/router';
import { FuncoesService } from '../funcoes.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { modulos } from '../modulos.model';
import { clientes } from '../clientes.model';

@Component({
  selector: 'app-cadastro-cli-mod',
  templateUrl: './cadastro-cli-mod.component.html',
  styleUrls: ['./cadastro-cli-mod.component.scss']
})
export class CadastroCliModComponent implements OnInit {
  cliente!: clientes[]
  modulo!: modulos[]

  selected!: string;

  modcliente: modcliente = {
    cliente: {},
    modulo: {},
    quantidadeCliente: ''
  }
  constructor(private router: Router, private funcoesService: FuncoesService) { }

  ngOnInit(): void {
    this.funcoesService.read().subscribe(cliente => {
      this.cliente = cliente
    })
    this.funcoesService.tabelaModulos().subscribe(modulo => {
      this.modulo = modulo
    })
  }
  AddMod() : void {
    
     this.funcoesService.tabelaModCli().subscribe(res =>{
        if(!res.find((item:any)  => item.cliente.nome == this.modcliente.cliente.nome &&  item.modulo.nome == this.modcliente.modulo.nome)){
          this.funcoesService.addModCli(this.modcliente).subscribe(() => {
            this.funcoesService.mensagem('Módulo registrado com sucesso!')
          });
        }
      });
  }
  // basicamente, essa funcao AddMod, está registrando o mod por cliente, caso encontre a informacao buscada negada, ou seja se o mod.nome e cliente.nome forem iguais ele não registra mod por cliente, mas se caso essa informacao for diferente (não iguais), retorna a funcao do service que registra o mod por cliente
}

