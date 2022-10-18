import { Component, OnInit } from '@angular/core';
import { clientes } from '../clientes.model';
import { FuncoesService } from '../funcoes.service';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  cliente!: clientes[]
  displayedColumns = ['id', 'nome', 'status', 'action']

  constructor(private funcoesService: FuncoesService ) { }

  ngOnInit(): void {
    this.funcoesService.read().subscribe(cliente => {
      this.cliente = cliente
    })
  }

}
