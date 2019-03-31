import { ButtonComponent } from './components/component-compiler/components/button/button.component';
import { CheckboxComponent } from './components/component-compiler/components/checkbox/checkbox.component';
import { InputComponent } from './components/component-compiler/components/input/input.component';
import { ComponentDefinition } from './models/component-defintion';
import { SelectComponent } from './components/component-compiler/components/select/select.component';
import { TextAreaComponent } from './components/component-compiler/components/text-area/text-area.component';

export class Input extends ComponentDefinition {
    constructor() {
        super();
        this.name = 'Input';
        this.type = InputComponent;
        this.preview = 'assets/img/input.png';
        this.icon = 'text_fields';
    }
}

export class Checkbox extends ComponentDefinition {
    constructor() {
        super();
        this.name = 'Checkbox';
        this.type = CheckboxComponent;
        this.preview = '';
        this.icon = 'check_box';
    }
}

export class Select extends ComponentDefinition {
    constructor() {
        super();
        this.name = 'Select';
        this.type = SelectComponent;
        this.preview = '';
        this.icon = 'arrow_drop_down';
    }
}

export class TextArea extends ComponentDefinition {
    constructor() {
        super();
        this.name = 'TextArea';
        this.type = TextAreaComponent;
        this.preview = '';
        this.icon = 'format_align_justify';
    }
}

export class Button extends ComponentDefinition {
    constructor() {
        super();
        this.name = 'Button';
        this.type = ButtonComponent;
        this.preview = '';
        this.icon = 'format_align_justify';
        this.config.label = 'Click me';
    }
}

export const COMPONENT_LIST = [
    new Input(),
    new Checkbox(),
    new Select(),
    new TextArea(),
    new Button()
];
