import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyRunnerComponent } from './assembly-runner.component';

describe('AssemblyRunnerComponent', () => {
  let component: AssemblyRunnerComponent;
  let fixture: ComponentFixture<AssemblyRunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssemblyRunnerComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
