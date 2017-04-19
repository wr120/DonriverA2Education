/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NissanComponent } from './nissan.component';

describe('NissanComponent', () => {
  let component: NissanComponent;
  let fixture: ComponentFixture<NissanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NissanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NissanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
