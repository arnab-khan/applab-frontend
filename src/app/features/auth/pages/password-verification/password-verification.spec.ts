import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordVerification } from './password-verification';

describe('PasswordVerification', () => {
  let component: PasswordVerification;
  let fixture: ComponentFixture<PasswordVerification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordVerification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordVerification);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
