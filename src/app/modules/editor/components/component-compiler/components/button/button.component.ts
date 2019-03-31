import { Component, Input, OnInit } from '@angular/core';
import { ComponentDefinition } from './../../../../models/component-defintion';



@Component({
  selector: 'app-button',
  template: `<button mat-raised-button>{{config.config.label}}</button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() config: ComponentDefinition;

  constructor() { }

  ngOnInit() {

  }

}
