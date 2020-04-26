import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyInstructionsHelpComponent } from './assembly-instructions-help.component';

xdescribe('AssemblyInstructionsHelpComponent', () => {
  let component: AssemblyInstructionsHelpComponent;
  let fixture: ComponentFixture<AssemblyInstructionsHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssemblyInstructionsHelpComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyInstructionsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
