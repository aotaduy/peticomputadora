import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsDisplayComponent } from './instructions-display.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

xdescribe('InstructionsDisplayComponent', () => {
  let component: InstructionsDisplayComponent;
  let fixture: ComponentFixture<InstructionsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionsDisplayComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
