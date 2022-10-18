import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ROTAS **********************************************************************************************************
import { AppRoutingModule } from './app-routing.module';
import { routing } from './app.routing';
// *****************************************************************************************************************

// MATERIAL ANGULAR ************************************************************************************************
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule}  from '@angular/material/button'; // botões
import {MatSnackBarModule}  from '@angular/material/snack-bar'; // aparecer a mensagem
import {MatCardModule} from '@angular/material/card';
// *******************************************************************************************************************


// COMPONENTES ************************************************************************************************
import { NavComponent } from './components/templete/nav/nav.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { CadastroCliModComponent } from './components/cadastro-cli-mod/cadastro-cli-mod.component';
import { PerfilComponent } from './components/perfil/perfil.component'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templete/header/header.component';
import { FooterComponent } from './components/templete/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { ReadComponent } from './components/read/read.component';
// *******************************************************************************************************************

// esse import realiza uma aquisiçāo http (por meio do http do backend (json)) para que assim possa inserir novos dados no back end
import {HttpClientModule} from '@angular/common/http'

// formulario angular
import {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import {MatCheckboxModule} from '@angular/material/checkbox';



import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CadastroModuloComponent } from './components/cadastro-modulo/cadastro-modulo.component';
import { TabelaModulosComponent } from './components/tabela-modulos/tabela-modulos.component';
import { TabelaCliModComponent } from './components/tabela-cli-mod/tabela-cli-mod.component';
import { LoginComponent } from './components/login/login.component';
import { LoginCadastroComponent } from './components/login-cadastro/login-cadastro.component';
import { ClienteUpdateComponent } from './components/cliente-update/cliente-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ClientesComponent,
    ModulosComponent,
    CadastroCliModComponent,
    PerfilComponent,
    HomeComponent,
    CadastroClienteComponent,
    ReadComponent,
    CadastroModuloComponent,
    TabelaModulosComponent,
    TabelaCliModComponent,
    LoginComponent,
    LoginCadastroComponent,
    ClienteUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    routing,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
