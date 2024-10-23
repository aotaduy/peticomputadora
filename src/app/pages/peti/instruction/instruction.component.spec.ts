import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionComponent } from './instruction.component';
import {Write} from '../model/instructions/write';
import { Byte } from '../model/byte';

describe('InstructionComponent', () => {
  let component: InstructionComponent;
  let fixture: ComponentFixture<InstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.instruction = new Write(new Byte([0, 0, 0, 0, 0, 0, 0, 0]));
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
