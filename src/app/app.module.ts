import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './module/login/login.component';
import { PermisosComponent } from './module/permisos/permisos.component';
import { AdministradorComponent } from './module/administrador/administrador.component';
import { UsuarioComponent } from './module/usuario/usuario.component';
import { CompraComponent } from './module/compra/compra.component';
import { GestionLogisticaComponent } from './module/gestion-logistica/gestion-logistica.component';
import { EntregaComponent } from './module/entrega/entrega.component';
import { HeaderComponent } from './estructura/header/header.component';
import { NavComponent } from './estructura/nav/nav.component';
import { FooterComponent } from './estructura/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PermisosComponent,
    AdministradorComponent,
    UsuarioComponent,
    CompraComponent,
    GestionLogisticaComponent,
    EntregaComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
