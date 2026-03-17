import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ImageCropper } from './image-cropper';

describe('ImageCropper', () => {
  let component: ImageCropper;
  let fixture: ComponentFixture<ImageCropper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCropper, NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCropper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
