import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightText } from './highlight-text';

@Component({
  template: `<p [appHighlightText]="term">Hello Angular world</p>`,
  standalone: true,
  imports: [HighlightText],
})
class TestHostComponent {
  term = 'Angular';
}

describe('HighlightText', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
  });

  it('should highlight the matching text', () => {
    fixture.detectChanges();

    const paragraph = fixture.debugElement.query(By.css('p')).nativeElement as HTMLElement;
    expect(paragraph.innerHTML).toContain('<span class="bg-yellow-200 text-inherit rounded px-0.5">Angular</span>');
  });

  it('should restore original text when highlight text is empty', () => {
    fixture.componentInstance.term = '';
    fixture.detectChanges();

    const paragraph = fixture.debugElement.query(By.css('p')).nativeElement as HTMLElement;
    expect(paragraph.textContent).toBe('Hello Angular world');
  });
});
