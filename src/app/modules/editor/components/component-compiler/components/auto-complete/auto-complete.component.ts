import { Component, OnInit, Input } from '@angular/core';
import { config } from 'rxjs';
import { ComponentDefinition } from 'src/app/modules/editor/models/component-defintion';

@Component({
  selector: 'app-auto-complete',
  template: `
  <mat-form-field class="example-full-width">
    <input type="text" placeholder="Pick one" aria-label="Number" matInput [formControl]="myControl" [matAutocomplete]="auto">
    <mat-autocomplete #auto="matAutocomplete">
      <mat-option *ngFor="let option of options" [value]="option">
        {{option}}
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
  `,
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
  @Input() config: ComponentDefinition;

  options: string[] = [
    'One',
    'Two',
    'Three'
  ];

  constructor() { }

  ngOnInit() {
  }

}
