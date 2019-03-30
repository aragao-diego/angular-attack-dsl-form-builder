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
import { ComponentConfigDialogComponent } from './components/component-config-dialog/component-config-dialog.component';
import { MatDialogModule } from '@angular/material';
import { ComponentCompilerComponent } from './components/component-compiler/component-compiler.component';
import { InputComponent } from './input/input.component';
import { ComponentsCompilerComponent } from './components-compiler/components-compiler.component';

@NgModule({
  declarations: [EditorComponent, ToolboxComponent, EditorDesignComponent, RowComponent, ComponentConfigDialogComponent, ComponentCompilerComponent, InputComponent, ComponentsCompilerComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    MatTabsModule,
    FlexLayoutModule,
    DragDropModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    EditorComponent
  ],
  entryComponents: [
    ComponentConfigDialogComponent
  ]
})
export class EditorModule { }
