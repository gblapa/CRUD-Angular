import { modcliente } from './modcliente.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from "rxjs";
import { clientes } from "./clientes.model";
import { modulos } from "./modulos.model";
import { login } from './login.model';


@Injectable({
    providedIn: 'root'
})

export class FuncoesService {

    baseUrl = "http://localhost:3001/clientes"
    baseUrl2 = "http://localhost:3001/modulos"
    baseUrl3 = "http://localhost:3001/modcliente"
    baseUrl4 = "http://localhost:3001/login"
    modcliente: any;

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    mensagem(msg: string) : void {
        this.snackBar.open(msg, 'X', {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top"
        })
    }

    addCliente(cliente: clientes): Observable<clientes> {
        return this.http.post<clientes>(this.baseUrl, cliente)
    }

    addModulo(modulo: modulos): Observable<modulos> {
        return this.http.post<modulos>(this.baseUrl2, modulo)
    }

    addModCli(mod: modcliente): Observable<modcliente> {
        return this.http.post<modcliente>(this.baseUrl3, mod)
    }

    addPerfil(login: login): Observable<login> {
        return this.http.post<login>(this.baseUrl4, login)
    }

    read(): Observable<clientes[]>
    {
        return this.http.get<clientes[]>(this.baseUrl)
    }


    tabelaModulos(): Observable<modulos[]>
    {
        return this.http.get<modulos[]>(this.baseUrl2)
    }

    tabelaModCli(): Observable<modcliente[]>
    {
        return this.http.get<modcliente[]>(this.baseUrl3)
    }



    // funcoes para realizar acoes nas colunas
    readById(id: any) : Observable<clientes> {
        const url = `${this.baseUrl}/${id}`
        return this.http.get<clientes>(url)
    }
    update(cliente: clientes): Observable<clientes> {
        const url = `${this.baseUrl}/${cliente.id}`
        return this.http.put<clientes>(url, cliente)
    }


    buscar(nome: modcliente) {
        return this.modcliente.cliente(nome)
        console.log(nome)
    }
}