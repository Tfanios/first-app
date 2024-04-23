import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { ModalFormComponent } from './modal-form/modal-form.component';
import {FormsModule} from '@angular/forms';
import { CmConvertPipe } from './pipes/cm-convert.pipe';
import { WeightConvertPipe } from './pipes/weight-convert.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ModalFormComponent,
    CmConvertPipe,
    WeightConvertPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    FormsModule
    
  ],
  providers: [  {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
