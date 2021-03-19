import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { PrestadoresRoutingModule } from './prestadores-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ConfiPrestadoresComponent } from './confi-prestadores/confi-prestadores.component';

@NgModule({
  declarations: [
  ConfiPrestadoresComponent],
  entryComponents: [
  ],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule,
             MatDialogModule, PrestadoresRoutingModule, NgxSpinnerModule,
           ],
  exports: [
              RouterModule,
              FormsModule
            ],
  providers: []
})
export class PrestadoresModule { }
