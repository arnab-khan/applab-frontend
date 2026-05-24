import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAction } from './auth-action';

describe('AuthAction', () => {
  let component: AuthAction;
  let fixture: ComponentFixture<AuthAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthAction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
