import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionDisplayComponent } from './execution-display.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('ExecutionDisplayComponent', () => {
  let component: ExecutionDisplayComponent;
  let fixture: ComponentFixture<ExecutionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionDisplayComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
