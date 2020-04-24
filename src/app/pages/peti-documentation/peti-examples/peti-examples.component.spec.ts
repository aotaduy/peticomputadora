import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiExamplesComponent } from './peti-examples.component';

xdescribe('PetiExamplesComponent', () => {
  let component: PetiExamplesComponent;
  let fixture: ComponentFixture<PetiExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetiExamplesComponent ]
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
