import { InputComponent } from './components/component-compiler/components/input/input.component';
import { ComponentDefinition } from './models/component-defintion';
import { TestComponent } from './components/test/test.component';

export class Input extends ComponentDefinition {
    constructor() {
        super();
        this.name = 'Input';
        this.type = InputComponent;
        this.preview = 'assets/img/input.png';
        this.icon = 'text_fields';
    }
}

export const COMPONENT_LIST = [
    new Input()
];
