import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyEditorComponent } from './assembly-editor.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NbCardModule, NbToastrService} from '@nebular/theme';
import {ReactiveFormsModule} from '@angular/forms';

xdescribe('AssemblyEditorComponent', () => {
  let component: AssemblyEditorComponent;
  let fixture: ComponentFixture<AssemblyEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssemblyEditorComponent ],
      imports: [ NbCardModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: NbToastrService, useValue: {danger: () => {}}},
      ],
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
