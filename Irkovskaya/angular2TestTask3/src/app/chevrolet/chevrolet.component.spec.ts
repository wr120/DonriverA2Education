/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChevroletComponent } from './chevrolet.component';

describe('ChevroletComponent', () => {
  let component: ChevroletComponent;
  let fixture: ComponentFixture<ChevroletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChevroletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChevroletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
