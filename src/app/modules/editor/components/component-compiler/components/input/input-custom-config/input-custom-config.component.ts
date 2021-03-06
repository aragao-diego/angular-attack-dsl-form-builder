import { Component, OnInit, Input } from '@angular/core';
import { ComponentDefinition } from '../../../../../models/component-defintion';

@Component({
  selector: 'app-input-custom-config',
  template: `
  <div *ngFor="let validation of validations">
    <mat-form-field class="example-full-width">
      <mat-label>{{capitalize(validation.name)}}</mat-label>
      <input [(ngModel)]="component.config.custom[validation.name]"
        matInput type="{{validation.type}}"
        [ngModelOptions]="{standalone: true}" />
    </mat-form-field>
  </div>
  `,
  styleUrls: ['./input-custom-config.component.scss']
})
export class InputCustomConfigComponent implements OnInit {


  @Input() component: ComponentDefinition;

  validations: any[];

  constructor() { }

  ngOnInit() {
    this.validations = [
      { name: 'minlength', type: 'number' },
      { name: 'maxlength', type: 'number' },
      { name: 'mask', type: 'text' },
      { name: 'pattern', type: 'text' }
    ];
  }

  capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }


}
