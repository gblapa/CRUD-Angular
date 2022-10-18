import { Component, OnInit } from '@angular/core';
import { FuncoesService } from '../funcoes.service';
import { modulos } from '../modulos.model';

@Component({
  selector: 'app-tabela-modulos',
  templateUrl: './tabela-modulos.component.html',
  styleUrls: ['./tabela-modulos.component.scss']
})
export class TabelaModulosComponent implements OnInit {


  modulo!: modulos[]
  displayedColumns = ['id', 'nome', 'status', 'action']
  constructor(private funcoesService: FuncoesService ) { }

  ngOnInit(): void {
    this.funcoesService.tabelaModulos().subscribe(modulo => {
      this.modulo = modulo
    })
  }
}
