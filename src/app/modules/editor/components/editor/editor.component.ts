import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { EditorDesignComponent } from '../editor-design/editor-design.component';
import { ToolboxComponent } from '../toolbox/toolbox.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  @ViewChild(EditorDesignComponent) design: EditorDesignComponent;
  @ViewChild(ToolboxComponent) toolbox: ToolboxComponent;



  even = [[1]];
  all = [[1, 2]];
  componentsList = [1, 2, 3];

 

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      setTimeout(() => {
        event.previousContainer.data.push(event.item.data);
      });
    }
  }

  addComponent(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      setTimeout(() => {
        event.previousContainer.data.push(event.item.data);
      });
    }
  }

  onAddComponent(event: CdkDragDrop<any>) {
    console.log(event);
    console.log('vaidshaudas', this.all[event.currentIndex]);

    // this.all[event.currentIndex].push(event.item.data);
  }

}
