import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { EditorComponent } from './components/editor/editor.component';
import { EditorRoutingModule } from './editor-routing.module';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [EditorComponent, ToolboxComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    MatTabsModule,
    FlexLayoutModule,
    DragDropModule
  ],
  exports: [
    EditorComponent
  ]
})
export class EditorModule { }
