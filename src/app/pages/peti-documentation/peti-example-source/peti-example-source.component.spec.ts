import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiExampleSourceComponent } from './peti-example-source.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { infiniteLoop } from '../example-programs';
import { HighlightModule } from 'ngx-highlightjs';
import { NbCardModule } from '@nebular/theme';

describe('PetiExampleSourceComponent', () => {
  let component: PetiExampleSourceComponent;
  let fixture: ComponentFixture<PetiExampleSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetiExampleSourceComponent ],
      imports:[HighlightModule, NbCardModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetiExampleSourceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.program = infiniteLoop;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
