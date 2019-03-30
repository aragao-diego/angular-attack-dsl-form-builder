import { Component, OnInit, Input } from '@angular/core';
import { ComponentDefinition } from '../../../../models/component-defintion';

@Component({
  selector: 'app-checkbox',
  template: `
  <div>
    <mat-checkbox *ngFor="let item of items">{{item}}</mat-checkbox>
  </div>
  `,
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() config: ComponentDefinition;


  items: string[];

  constructor() { }

  ngOnInit() {
    this.items = ['Example1', 'Example2'];
  }

}
