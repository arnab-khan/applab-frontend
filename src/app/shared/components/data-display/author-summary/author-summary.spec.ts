import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorSummary } from './author-summary';

describe('AuthorSummary', () => {
  let component: AuthorSummary;
  let fixture: ComponentFixture<AuthorSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
