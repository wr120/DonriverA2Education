import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFormComponentComponent } from './image-form-component.component';

describe('ImageFormComponentComponent', () => {
  let component: ImageFormComponentComponent;
  let fixture: ComponentFixture<ImageFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
