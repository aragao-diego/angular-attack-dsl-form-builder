import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCompilerComponent } from './component-compiler.component';

describe('ComponentCompilerComponent', () => {
  let component: ComponentCompilerComponent;
  let fixture: ComponentFixture<ComponentCompilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCompilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCompilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
