import { ComponentDefinition } from './../../models/component-defintion';
import { Component, OnInit, ViewChild, ComponentFactoryResolver, Inject, Renderer, ElementRef, ComponentRef, Input } from '@angular/core';
import { ComponentContainerDirective } from './component-container.directive';


@Component({
  selector: 'app-component-compiler',
  template: '<div componentContainer></div>',
})
export class ComponentCompilerComponent implements OnInit {

  @ViewChild(ComponentContainerDirective) childElement: ComponentContainerDirective;
  @Input() component: ComponentDefinition;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {
    console.log(this.component);
    const ref: ComponentRef<any> = this.componentFactoryResolver
      .resolveComponentFactory(this.component.type)
      .create(this.childElement.viewContainer.injector);

    this.childElement.viewContainer.insert(ref.hostView);
    ref.instance.config = this.component;
  }

}
