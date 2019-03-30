import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  @Input() data;
  @Input() id;

  constructor() { }

  ngOnInit() {
    console.log(this.id);

  }

  order(event: CdkDragDrop<any[]>) {
    console.log('order');
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.item);
      this.data.push(event.item.data);
    }
  }

  delete(i) {
    this.data.splice(i, 1);
  }

}
