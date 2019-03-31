import { ComponentConfig } from './component-config';
export class ComponentDefinition {
    name: string;
    type: { new(...args: any[]): any; };
    preview: string;
    icon: string;
    config: ComponentConfig;

    constructor() {
        this.config = new ComponentConfig();
    }
}
