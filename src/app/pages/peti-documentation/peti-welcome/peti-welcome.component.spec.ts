import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiWelcomeComponent } from './peti-welcome.component';

xdescribe('PetiWelcomeComponent', () => {
  let component: PetiWelcomeComponent;
  let fixture: ComponentFixture<PetiWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetiWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetiWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
