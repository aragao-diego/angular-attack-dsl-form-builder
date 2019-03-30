import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-input',
  template: `
  <mat-form-field fxFlex floatLabel="auto">
    <mat-label>Input</mat-label>
    <input matInput placeholder="Input">
  </mat-form-field>
  ` ,
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() config: any;

  constructor() { }

  ngOnInit() {
  }

}
