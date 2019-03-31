import { MatToolbarModule } from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatFormFieldModule, MatSelectModule, MatAutocompleteModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextAreaComponent } from './components/component-compiler/components/text-area/text-area.component';
import { AutoCompleteComponent } from './components/component-compiler/components/auto-complete/auto-complete.component';
import { RadioButtonComponent } from './components/component-compiler/components/radio-button/radio-button.component';
import { ButtonComponent } from './components/component-compiler/components/button/button.component';
import { DatePickerComponent } from './components/component-compiler/components/date-picker/date-picker.component';

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
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatToolbarModule,
    FormsModule,
    MatRadioModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule
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
    AutoCompleteComponent,
    ButtonComponent,
    RadioButtonComponent,
    ButtonComponent,
    DatePickerComponent,
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
    TextAreaComponent,
    AutoCompleteComponent,
    ButtonComponent,
    RadioButtonComponent,
    ButtonComponent,
    DatePickerComponent,
  ]
})
export class EditorModule { }
