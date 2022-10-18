import { Component, OnInit } from '@angular/core';
import { FuncoesService } from '../funcoes.service';
import { modcliente } from '../modcliente.model';

@Component({
  selector: 'app-tabela-cli-mod',
  templateUrl: './tabela-cli-mod.component.html',
  styleUrls: ['./tabela-cli-mod.component.scss']
})
export class TabelaCliModComponent implements OnInit {

  constructor(private funcoesService: FuncoesService) { }

  modcliente!: modcliente[]
  displayedColumns = ['id', 'cliente', 'modulo', 'action']
  ngOnInit(): void {
      this.funcoesService.tabelaModCli().subscribe(modcliente => {
      this.modcliente = modcliente
    })
  }
  // <td ng-class="{'green':item.status_indicacao=='Ativo','red': item.status_indicacao=='Cancelado','orange': item.status_indicacao=='Substituído'}" >{{item.status_indicacao}}</td>
}
