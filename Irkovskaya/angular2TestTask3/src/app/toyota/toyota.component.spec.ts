/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToyotaComponent } from './toyota.component';

describe('ToyotaComponent', () => {
  let component: ToyotaComponent;
  let fixture: ComponentFixture<ToyotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToyotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
