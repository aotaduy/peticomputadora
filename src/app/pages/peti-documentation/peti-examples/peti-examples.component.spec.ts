import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiExamplesComponent } from './peti-examples.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PetiExampleSourceComponent } from '../peti-example-source/peti-example-source.component';

describe('PetiExamplesComponent', () => {
  let component: PetiExamplesComponent;
  let fixture: ComponentFixture<PetiExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetiExamplesComponent, PetiExampleSourceComponent ],
      imports:[RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetiExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
