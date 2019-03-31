import { Component, OnInit, Input } from '@angular/core';
import { ComponentDefinition } from '../../../../models/component-defintion';


@Component({
  selector: 'app-input',
  template: `
  <mat-form-field fxFlex floatLabel="auto">
    <mat-label>{{config.config.label}}</mat-label>
    <input matInput [required]="config.config.required" placeholder="Input">
  </mat-form-field>
  ` ,
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() config: ComponentDefinition;

  constructor() { }

  ngOnInit() {
  }

}
