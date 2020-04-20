import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionDisplayComponent } from './execution-display.component';

describe('ExecutionDisplayComponent', () => {
  let component: ExecutionDisplayComponent;
  let fixture: ComponentFixture<ExecutionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionDisplayComponent ]
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
