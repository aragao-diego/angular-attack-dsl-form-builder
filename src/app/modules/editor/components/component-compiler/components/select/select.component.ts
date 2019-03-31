import { Component, Input, OnInit } from '@angular/core';
import { ComponentDefinition } from 'src/app/modules/editor/models/component-defintion';

@Component({
  selector: 'app-select',
  template: `
    <mat-form-field fxLayout="100%" floatLabel="auto">
      <mat-label>Select Name</mat-label>
      <mat-select>
        <mat-option *ngFor="let item of items" [value]="item.value">
          {{item.viewValue}}
        </mat-option>
      </mat-select>
    </mat-form-field>
      `,
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() config: ComponentDefinition;

  items: object[] = [
    {value: 'item-0', viewValue: 'Item 1'},
    {value: 'item-1', viewValue: 'Item 2'},
    {value: 'item-2', viewValue: 'Item 3'}
  ];

  constructor() { }

  ngOnInit() {
  }


}
