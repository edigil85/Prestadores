import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadFileComponent } from './shared/components/upload-file/upload-file.component';

const routes: Routes = [
  /*{ path: '', redirectTo: 'solicitud-autorizaciones', pathMatch: 'full'},
  { path: 'solicitud-autorizaciones', component: SolicitudAutorizacionesComponent},*/
  { path: 'upload', component: UploadFileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
