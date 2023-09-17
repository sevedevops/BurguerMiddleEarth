import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent } from './module/compra/compra.component';
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
      {path:"compra", component: CompraComponent}
    ]
  }
]

//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
