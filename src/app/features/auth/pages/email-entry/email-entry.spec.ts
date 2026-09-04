import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailEntry } from './email-entry';

describe('EmailEntry', () => {
  let component: EmailEntry;
  let fixture: ComponentFixture<EmailEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
