import { Component, OnInit, Input } from '@angular/core';
import { ComponentDefinition } from '../../../../models/component-defintion';


@Component({
  selector: 'app-input',
  template: `
  <mat-form-field fxFlex floatLabel="auto">
    <mat-label>{{this.config.config.label}}</mat-label>
    <input matInput placeholder="Input">
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
