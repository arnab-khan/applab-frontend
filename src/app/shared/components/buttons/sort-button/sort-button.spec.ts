import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortButton } from './sort-button';

describe('SortButton', () => {
  let component: SortButton;
  let fixture: ComponentFixture<SortButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortButton);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', 'Created');
    fixture.componentRef.setInput('field', 'createdAt');
    fixture.componentRef.setInput('activeField', 'updatedAt');
    fixture.componentRef.setInput('direction', 'desc');
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
