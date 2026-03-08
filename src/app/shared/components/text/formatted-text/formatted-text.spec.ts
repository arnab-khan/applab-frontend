import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattedText } from './formatted-text';

describe('FormattedText', () => {
  let component: FormattedText;
  let fixture: ComponentFixture<FormattedText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormattedText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormattedText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
