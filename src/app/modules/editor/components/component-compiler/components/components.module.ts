import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import {
  MatFormFieldModule,
  MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    InputComponent,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class ComponentsModule { }
