import { Component } from './models/component';

export class Input extends Component {
    constructor() {
        super();
        this.name = 'Input';
        this.type = 'InputComponent';
        this.preview = 'assets/img/input.png';
        this.icon = 'text_fields';
    }
}

export const COMPONENT_LIST = [
    new Input()
];
