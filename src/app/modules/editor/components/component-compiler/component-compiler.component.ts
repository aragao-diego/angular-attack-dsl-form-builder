import { ComponentDefinition } from './../../models/component-defintion';
import { Component, OnInit, ViewChild, ComponentFactoryResolver, Inject, Renderer, ElementRef, ComponentRef, Input } from '@angular/core';
import { ComponentContainerDirective } from './component-container.directive';


@Component({
  selector: 'app-component-compiler',
  template: '<div app-component-container></div>',
})
export class ComponentCompilerComponent implements OnInit {

  @ViewChild(ComponentContainerDirective) childElement: ComponentContainerDirective;
  @Input() component: ComponentDefinition;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(Renderer) private renderer: Renderer,
    @Inject(ElementRef) private element: ElementRef
  ) {
  }

  ngOnInit() {
    console.log(this.component);
    const ref: ComponentRef<any> = this.componentFactoryResolver
      .resolveComponentFactory(this.component.type)
      .create(this.childElement.viewContainer.injector);

    this.childElement.viewContainer.insert(ref.hostView);

    // ref.instance.form = this.ngcForm;
    // ref.instance.control = this.ngcControl;
    // ref.instance.label = this.label;
    // ref.instance.type = this.type;
    // ref.instance._value = this._value;
    // ref.instance.required = this.required;
    // ref.instance.minLength = this.minLength;
    // ref.instance.maxLength = this.maxLength;
    // ref.instance.options = this.options;
    // ref.instance._mask = this.mask;
    // ref.instance.rows = this.rows;
    // ref.instance.dateConfig = this.dateConfig;
    // ref.instance.dataIntervalConfig = this.dateIntervalConfig;
    // ref.instance.align = this.align;
    // ref.instance.autocompleteConfig = this.autocompleteConfig;
    // ref.instance.accept = this.accept;
    // ref.instance.async = this.async;
    // ref.instance.blur = this.blur;
    // ref.instance.input = this.input;
    // ref.instance.appendButton = this.appendButton;
    // ref.instance.icon = this.icon;
  }

}
