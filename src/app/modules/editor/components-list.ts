import { CheckboxComponent } from './components/component-compiler/components/checkbox/checkbox.component';
import { InputComponent } from './components/component-compiler/components/input/input.component';
import { ComponentDefinition } from './models/component-defintion';
import { SelectComponent } from './components/component-compiler/components/select/select.component';

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

export const COMPONENT_LIST = [
    new Input(),
    new Checkbox(),
    new Select()
];
