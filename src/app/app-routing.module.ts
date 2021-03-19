import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadFileComponent } from './shared/components/upload-file/upload-file.component';
import { ConfiPrestadoresComponent } from './components/prestadores/confi-prestadores/confi-prestadores.component';

const routes: Routes = [
  /*{ path: '', redirectTo: 'solicitud-autorizaciones', pathMatch: 'full'},
  { path: 'solicitud-autorizaciones', component: SolicitudAutorizacionesComponent},*/
  { path: 'upload', component: UploadFileComponent},
  { path: 'prestadores', component: ConfiPrestadoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
