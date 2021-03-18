import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudAutorizacionesComponent } from './solicitud-autorizaciones/solicitud-autorizaciones.component';


const ADMIN_ROUTES: Routes = [
  { path: 'autorizaciones/solicitud', component: SolicitudAutorizacionesComponent },
  { path: '**', redirectTo: 'autorizaciones/solicitud' }
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES),],
  exports: [RouterModule]
})
export class AutorizacionesRoutingModule { }
