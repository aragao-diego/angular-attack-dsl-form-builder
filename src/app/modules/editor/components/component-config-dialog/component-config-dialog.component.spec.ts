import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentConfigDialogComponent } from './component-config-dialog.component';

describe('ComponentConfigDialogComponent', () => {
  let component: ComponentConfigDialogComponent;
  let fixture: ComponentFixture<ComponentConfigDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentConfigDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentConfigDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
