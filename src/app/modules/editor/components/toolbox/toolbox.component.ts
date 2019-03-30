import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { all } from 'q';

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
  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(item: CdkDrag<number>) {
    return item.data % 2 === 0;
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }

  // onAddComponent($event: CdkDragDrop<any>) {
  //   console.log('disparado');
  //   this.addComponent.emit($event);
  // }

}
