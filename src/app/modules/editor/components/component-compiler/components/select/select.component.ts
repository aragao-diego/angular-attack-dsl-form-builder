import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  styleUrls: ['./select.component.scss'],
  template:`
        <mat-select>
          <mat-option *ngFor="let item of items" [value]="item.value">
            {{item.viewValue}}
          </mat-option>
        </mat-select>`
})
export class SelectComponent implements OnInit {
  @Input() config: any;

  constructor() { }

  ngOnInit() {
  }

}
