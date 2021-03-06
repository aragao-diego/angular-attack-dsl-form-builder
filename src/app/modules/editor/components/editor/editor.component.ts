import { DslComponent } from './../dsl/dsl.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EditorDesignComponent } from '../editor-design/editor-design.component';
import { ToolboxComponent } from '../toolbox/toolbox.component';
import { COMPONENT_LIST } from './../../components-list';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  @ViewChild(EditorDesignComponent) design: EditorDesignComponent;
  @ViewChild(ToolboxComponent) toolbox: ToolboxComponent;
  @ViewChild(DslComponent) dsl: DslComponent;


  editMode = true;
  even = [[]];
  all = [];
  componentsList = COMPONENT_LIST;

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      event.container.data.push([]);
    }
  }

  addComponent(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
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
