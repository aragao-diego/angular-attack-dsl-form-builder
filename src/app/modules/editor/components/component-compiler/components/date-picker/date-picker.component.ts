import { Component, Input, OnInit } from '@angular/core';
import { ComponentDefinition } from 'src/app/modules/editor/models/component-defintion';

@Component({
  selector: 'app-date-picker',
  template: `
    <mat-form-field fxFlex floatLabel="auto">
      <input matInput [matDatepicker]="picker" [placeholder]="config.config.label">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  `,
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @Input() config: ComponentDefinition;

  constructor() { }

  ngOnInit() {
  }

}
