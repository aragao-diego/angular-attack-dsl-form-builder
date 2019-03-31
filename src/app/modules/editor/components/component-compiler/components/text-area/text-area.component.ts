import { Component, OnInit, Input } from '@angular/core';
import { ComponentDefinition } from 'src/app/modules/editor/models/component-defintion';

@Component({
  selector: 'app-text-area',
  template: `
    <mat-form-field fxFlex floatLabel="auto">
      <mat-label>Text Area</mat-label>
      <textarea matInput placeholder="Text Area"></textarea>
    </mat-form-field>
  `,
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
  @Input() config: ComponentDefinition;

  constructor() { }

  ngOnInit() {
  }

}
