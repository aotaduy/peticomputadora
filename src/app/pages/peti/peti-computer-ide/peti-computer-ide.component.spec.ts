import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiComputerIdeComponent } from './peti-computer-ide.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('PetiComputerIdeComponent', () => {
  let component: PetiComputerIdeComponent;
  let fixture: ComponentFixture<PetiComputerIdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetiComputerIdeComponent ],
      imports:[RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetiComputerIdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
