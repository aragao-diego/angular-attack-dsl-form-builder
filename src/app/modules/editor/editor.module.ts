import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { EditorComponent } from './components/editor/editor.component';
import { EditorRoutingModule } from './editor-routing.module';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EditorDesignComponent } from './components/editor-design/editor-design.component';
import { RowComponent } from './components/row/row.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [EditorComponent, ToolboxComponent, EditorDesignComponent, RowComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    MatTabsModule,
    FlexLayoutModule,
    DragDropModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    EditorComponent
  ]
})
export class EditorModule { }
