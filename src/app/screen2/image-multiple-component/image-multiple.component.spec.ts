import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMultipleComponent } from './image-multiple.component';

describe('ImageMutipleComponentComponent', () => {
  let component: ImageMultipleComponent;
  let fixture: ComponentFixture<ImageMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
