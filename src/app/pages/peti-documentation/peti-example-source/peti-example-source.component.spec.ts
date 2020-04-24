import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiExampleSourceComponent } from './peti-example-source.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

xdescribe('PetiExampleSourceComponent', () => {
  let component: PetiExampleSourceComponent;
  let fixture: ComponentFixture<PetiExampleSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetiExampleSourceComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetiExampleSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
