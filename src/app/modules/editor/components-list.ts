import { InputComponent } from './components/component-compiler/components/input/input.component';
import { ComponentDefinition } from './models/component-defintion';
import { TestComponent } from './components/test/test.component';
import { CheckboxComponent } from './components/component-compiler/components/checkbox/checkbox.component';

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
        this.icon = '';
    }
}

export const COMPONENT_LIST = [
    new Input(),
    new Checkbox()
];
