import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRotateFormComponent } from './image-rotate-form.component';

describe('ImageRotateFormComponent', () => {
  let component: ImageRotateFormComponent;
  let fixture: ComponentFixture<ImageRotateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageRotateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRotateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
