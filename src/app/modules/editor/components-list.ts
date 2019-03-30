import { ComponentDefinition } from './models/component-defintion';
import { TestComponent } from './components/test/test.component';

export class Input extends ComponentDefinition {
    constructor() {
        super();
        this.name = 'Input';
        this.type = TestComponent;
        this.preview = 'assets/img/input.png';
        this.icon = 'text_fields';
    }
}

export const COMPONENT_LIST = [
    new Input()
];
