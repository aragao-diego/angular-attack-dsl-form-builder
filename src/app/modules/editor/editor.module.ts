import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatFormFieldModule, MatSelect, MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ComponentCompilerComponent } from './components/component-compiler/component-compiler.component';
import { ComponentContainerDirective } from './components/component-compiler/component-container.directive';
import { InputComponent } from './components/component-compiler/components/input/input.component';
import { ComponentConfigDialogComponent } from './components/component-config-dialog/component-config-dialog.component';
import { EditorDesignComponent } from './components/editor-design/editor-design.component';
import { EditorComponent } from './components/editor/editor.component';
import { RowComponent } from './components/row/row.component';
import { TestComponent } from './components/test/test.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { EditorRoutingModule } from './editor-routing.module';
import { MatInputModule } from '@angular/material';
import { CheckboxComponent } from './components/component-compiler/components/checkbox/checkbox.component';
import { DslComponent } from './components/dsl/dsl.component';
import { SelectComponent } from './components/component-compiler/components/select/select.component';
import { FormsModule } from '@angular/forms';
import { TextAreaComponent } from './components/component-compiler/components/text-area/text-area.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    EditorRoutingModule,
    MatTabsModule,
    FlexLayoutModule,
    DragDropModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule
    ],
  declarations: [
    EditorComponent,
    ToolboxComponent,
    EditorDesignComponent,
    RowComponent,
    ComponentConfigDialogComponent,
    ComponentCompilerComponent,
    TestComponent,
    ComponentContainerDirective,
    InputComponent,
    CheckboxComponent,
    SelectComponent,
    TextAreaComponent,
    DslComponent,

  ],
  exports: [
    EditorComponent,
    ComponentContainerDirective
  ],
  entryComponents: [
    ComponentConfigDialogComponent,
    TestComponent,
    InputComponent,
    CheckboxComponent,
    SelectComponent,
    TextAreaComponent
  ]
})
export class EditorModule { }
