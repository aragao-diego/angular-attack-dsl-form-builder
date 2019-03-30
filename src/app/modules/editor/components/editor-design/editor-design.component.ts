import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-editor-design',
  templateUrl: './editor-design.component.html',
  styleUrls: ['./editor-design.component.scss']
})
export class EditorDesignComponent implements OnInit {

  rows = [];
  @Input() data;
  @Input() drop;
  even = [10];

  constructor() { }


  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(item: CdkDrag<number>) {
    return item.data % 2 === 0;
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }

  ngOnInit() {
  }



}
