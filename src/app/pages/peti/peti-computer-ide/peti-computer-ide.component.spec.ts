import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiComputerIdeComponent } from './peti-computer-ide.component';

describe('PetiComputerIdeComponent', () => {
  let component: PetiComputerIdeComponent;
  let fixture: ComponentFixture<PetiComputerIdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetiComputerIdeComponent ],
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
