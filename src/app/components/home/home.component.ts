import { modcliente } from './../modcliente.model';
import { Component, OnInit } from '@angular/core';
import { FuncoesService } from '../funcoes.service';
import { isNgTemplate } from '@angular/compiler';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns = ['cliente', 'modulo', 'quantidadeCliente', 'quantidadeModulo', 'usuarios', 'action']

  modcliente!: modcliente[]

  modcliente2: modcliente = {
    cliente: {},
    modulo: {},
    quantidadeCliente: '',
    quantidadeModulo: ''
  }

  pesquisa: string = ''
  constructor(private funcoesService: FuncoesService) { }

  Resultado(v1:number, v2:number) {
    let result:any
    console.log(result)
      if ( v1 < v2 || v1 == v2 || v1 > v2)
      {
        result = (v2 - v1)
        return result
      }
  }
  menor(n1: number, n2: number) :number {
    if(n1<=n2)
      return 1
    else
      return 0
  }


  buscar() {
    if(this.pesquisa != '')
    {
      const newVetor = this.modcliente.filter(el => el.cliente.nome == this.pesquisa)
      // this.funcoesService.tabelaModCli().subscribe(nomeCliente => {
       
      // })
      console.log(newVetor)
      this.modcliente = newVetor
    }
  }

  ngOnInit(): void {
    this.funcoesService.tabelaModCli().subscribe(modcliente => {
      this.modcliente = modcliente
    })
  }
}


  // alteraCor(v1:number, v2:number) {
  //   if ( v2 > v1)
  //   {
  //     let verde="verde"
  //     return verde
  //   }
  //   else
  //   {
  //     let vermelho="vermelho"
  //     return vermelho
  //   }
  // }
