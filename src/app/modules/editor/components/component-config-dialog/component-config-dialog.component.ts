import { Component, OnInit, Inject, ViewChild, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ComponentContainerDirective } from '../component-compiler/component-container.directive';

@Component({
  selector: 'app-component-config-dialog',
  templateUrl: './component-config-dialog.component.html',
  styleUrls: ['./component-config-dialog.component.scss']
})
export class ComponentConfigDialogComponent implements OnInit {

  @ViewChild(ComponentContainerDirective) childElement: ComponentContainerDirective;

  constructor(
    public dialogRef: MatDialogRef<ComponentConfigDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private componentFactoryResolver: ComponentFactoryResolver) {

  }

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  ngOnInit() {
    console.log('dialog data', this.data);
    if (this.data.configComponent) {
      const ref: ComponentRef<any> = this.componentFactoryResolver
        .resolveComponentFactory(this.data.configComponent)
        .create(this.childElement.viewContainer.injector);
  
      ref.instance.component = this.data;
      this.childElement.viewContainer.insert(ref.hostView);

    }
  }

}
