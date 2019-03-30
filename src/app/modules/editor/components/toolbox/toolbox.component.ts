import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

  @Input() data;
  @Input() connected;
  @Input() drop;
  @Input() componentsList;
  @Input() addComponent;
  @Input() all;
  // @Output() addComponent: EventEmitter<CdkDragDrop<any>> = new EventEmitter<CdkDragDrop<any>>();

  get ids() {
    return this.all.map((value, index) => 'id' + index);
  }

  constructor() { }

  ngOnInit() {
  }
}
