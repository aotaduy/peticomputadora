import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiDocumentationComponent } from './peti-documentation.component';

describe('PetiDocumentationComponent', () => {
  let component: PetiDocumentationComponent;
  let fixture: ComponentFixture<PetiDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetiDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetiDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
