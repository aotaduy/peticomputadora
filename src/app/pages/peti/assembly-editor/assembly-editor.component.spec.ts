import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyEditorComponent } from './assembly-editor.component';

describe('AssemblyEditorComponent', () => {
  let component: AssemblyEditorComponent;
  let fixture: ComponentFixture<AssemblyEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssemblyEditorComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
