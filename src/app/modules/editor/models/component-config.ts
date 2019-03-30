import { Validator } from './validator';

export class ComponentConfig {
    label: string;
    size: number;
    required: boolean;
    validations: Validator[];
}
