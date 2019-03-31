import { ButtonComponent } from './components/component-compiler/components/button/button.component';
import { CheckboxComponent } from './components/component-compiler/components/checkbox/checkbox.component';
import { InputComponent } from './components/component-compiler/components/input/input.component';
import { ComponentDefinition } from './models/component-defintion';
import { SelectComponent } from './components/component-compiler/components/select/select.component';
import { TextAreaComponent } from './components/component-compiler/components/text-area/text-area.component';
import { AutoCompleteComponent } from './components/component-compiler/components/auto-complete/auto-complete.component';
import { TestComponent } from './components/test/test.component';
import { RadioButtonComponent } from './components/component-compiler/components/radio-button/radio-button.component';
import { DatePickerComponent } from './components/component-compiler/components/date-picker/date-picker.component';

export class Input extends ComponentDefinition {
    constructor() {
        super();
        this.name = 'Input';
        this.type = InputComponent;
        this.preview = 'assets/img/input.png';
        this.icon = 'text_fields';
        this.config.label = 'Label';
    }
}

export class Checkbox extends ComponentDefinition {
    constructor() {
        super();
        this.name = 'Checkbox';
        this.type = CheckboxComponent;
        this.preview = '';
        this.icon = 'check_box';
        this.config.label = 'Label';
    }
}

export class Select extends ComponentDefinition {
    constructor() {
        super();
        this.name = 'Select';
        this.type = SelectComponent;
        this.preview = '';
        this.icon = 'arrow_drop_down';
        this.config.label = 'Label';
    }
}

export class TextArea extends ComponentDefinition {
    constructor() {
        super();
        this.name = 'TextArea';
        this.type = TextAreaComponent;
        this.preview = '';
        this.icon = 'format_align_justify';
        this.config.label = 'Label';
    }
}

export class AutoCompete extends ComponentDefinition {
    constructor() {
        super();
        this.name = 'AutoComplete';
        this.type = AutoCompleteComponent;
        this.preview = '';
        this.icon = 'format_color_text';
        this.config.label = 'Label';
    }
}

export class RadioButton extends ComponentDefinition {
    constructor() {
        super();
        this.name = 'RadioButton';
        this.type = RadioButtonComponent;
        this.preview = '';
        this.icon = 'radio_button_checked';
    }
}

export class Button extends ComponentDefinition {
    constructor() {
        super();
        this.name = 'Button';
        this.type = ButtonComponent;
        this.configComponent = TestComponent;
        this.preview = '';
        this.icon = 'check_box_outline_blank';
        this.config.label = 'Click me';
    }
}

export class DatePicker extends ComponentDefinition {
    constructor() {
        super();
        this.name = 'DatePicker';
        this.type = DatePickerComponent;
        this.preview = '';
        this.icon = 'date_range';
    }
}

export const COMPONENT_LIST = [
    new Input(),
    new Checkbox(),
    new Select(),
    new TextArea(),
    new AutoCompete(),
    new RadioButton(),
    new Button(),
    new DatePicker()
];
