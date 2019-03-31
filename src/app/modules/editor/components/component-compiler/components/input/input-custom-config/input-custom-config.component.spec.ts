import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCustomConfigComponent } from './input-custom-config.component';

describe('InputCustomConfigComponent', () => {
  let component: InputCustomConfigComponent;
  let fixture: ComponentFixture<InputCustomConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCustomConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCustomConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
