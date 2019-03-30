import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[componentContainer]'
})
export class ComponentContainerDirective {
    constructor(public viewContainer: ViewContainerRef) {}
}
