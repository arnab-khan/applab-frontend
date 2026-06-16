import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedDots } from './animated-dots';

describe('AnimatedDots', () => {
  let component: AnimatedDots;
  let fixture: ComponentFixture<AnimatedDots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedDots]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedDots);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
