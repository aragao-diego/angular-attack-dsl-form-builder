import { ComponentDefinition } from 'src/app/modules/editor/models/component-defintion';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-radio-button',
  template: `
  <label id="example-radio-group-label">{{config.config.label}}</label>
  <mat-radio-group class="example-radio-group">
    <mat-radio-button class="example-radio-button" *ngFor="let item of items" [value]="item">
      {{item}}
    </mat-radio-button>
  </mat-radio-group>
  `,
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  @Input() config: ComponentDefinition;

  constructor() { }


  items: string[] = ['Button 1', 'Button 2', 'Button 3'];

  ngOnInit() {
  }

}
