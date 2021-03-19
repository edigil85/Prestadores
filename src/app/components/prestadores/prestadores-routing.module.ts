import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiPrestadoresComponent } from './confi-prestadores/confi-prestadores.component';


const ADMIN_ROUTES: Routes = [
  { path: 'prestadores/Configuracionprestadores', component: ConfiPrestadoresComponent },
  { path: '**', redirectTo: 'prestadores/Configuracionprestadores' }
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES),],
  exports: [RouterModule]
})
export class PrestadoresRoutingModule { }