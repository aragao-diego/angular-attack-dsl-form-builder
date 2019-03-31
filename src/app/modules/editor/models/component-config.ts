import { Validator } from './validator';

export class ComponentConfig {
    label: string;
    size = 50;
    required: boolean;
    validations: Validator[];
    custom: any;

    constructor() {
        this.custom = {};
    }
}
