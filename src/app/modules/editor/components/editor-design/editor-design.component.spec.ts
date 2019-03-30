import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDesignComponent } from './editor-design.component';

describe('EditorDesignComponent', () => {
  let component: EditorDesignComponent;
  let fixture: ComponentFixture<EditorDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
