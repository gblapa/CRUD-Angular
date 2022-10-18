import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroCliModComponent } from './components/cadastro-cli-mod/cadastro-cli-mod.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { CadastroModuloComponent } from './components/cadastro-modulo/cadastro-modulo.component';
import { ClienteUpdateComponent } from './components/cliente-update/cliente-update.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { HomeComponent } from './components/home/home.component';
import { LoginCadastroComponent } from './components/login-cadastro/login-cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { TabelaCliModComponent } from './components/tabela-cli-mod/tabela-cli-mod.component';




const ROTAS: Routes = [
    { path: '', component: HomeComponent},
    { path: 'clientes', component:ClientesComponent },
    { path: 'modulos', component: ModulosComponent},
    { path: 'cadastro-cli-mod', component: CadastroCliModComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: 'cadastro/cliente', component: CadastroClienteComponent},
    {path: 'cadastro/modulo', component: CadastroModuloComponent},
    {path: 'tabela/cliente/modulo', component: TabelaCliModComponent},
    {path: 'login', component: LoginComponent},
    {path: 'login/cadastro', component: LoginCadastroComponent},
    {path: 'atualizar/cliente', component: ClienteUpdateComponent}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(ROTAS);