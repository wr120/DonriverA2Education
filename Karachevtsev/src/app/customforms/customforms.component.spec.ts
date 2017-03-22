import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomformsComponent } from './customforms.component';

describe('CustomformsComponent', () => {
  let component: CustomformsComponent;
  let fixture: ComponentFixture<CustomformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
