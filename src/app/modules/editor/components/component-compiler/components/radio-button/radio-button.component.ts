import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  template: `
  <label id="example-radio-group-label">Pick your favorite season</label>
  <mat-radio-group class="example-radio-group">
    <mat-radio-button class="example-radio-button" *ngFor="let item of items" [value]="item">
      {{item}}
    </mat-radio-button>
  </mat-radio-group>
  `,
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  constructor() { }


  items: string[] = ['Button 1', 'Button 2', 'Button 3'];

  ngOnInit() {
  }

}
