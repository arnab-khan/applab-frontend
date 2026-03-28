import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ImageUploader } from './image-uploader';

describe('ImageUploader', () => {
  let component: ImageUploader;
  let fixture: ComponentFixture<ImageUploader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageUploader, NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageUploader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validates by file category', () => {
    (component.allowedCategories as any).set(['image']);
    const file = new File([new Uint8Array([1, 2, 3])], 'avatar.png', { type: 'image/png' });
    expect((component as any).validate(file)).toBe(true);
  });
});
