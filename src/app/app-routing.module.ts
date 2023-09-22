import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './module/administrador/administrador.component';
import { CompraComponent } from './module/compra/compra.component';
import { EntregaComponent } from './module/entrega/entrega.component';
import { GestionLogisticaComponent } from './module/gestion-logistica/gestion-logistica.component';
import { LoginComponent } from './module/login/login.component';
import { PermisosComponent } from './module/permisos/permisos.component';
import { UsuarioComponent } from './module/usuario/usuario.component';

const routes: Routes=[
  {
    path:"", component: LoginComponent,
    children:[
      {path:"login", component: LoginComponent},
      {path:"permisos", component: PermisosComponent},
      {path:"usuario", component: UsuarioComponent},
      {path:"compra", component: CompraComponent},
      {path:"gestion-logistica", component: GestionLogisticaComponent},
      {path:"entrega", component: EntregaComponent},
      {path:"administrador", component: AdministradorComponent}
    ]
  }
]

//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
