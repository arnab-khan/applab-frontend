import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormDialog } from './todo-form-dialog';

describe('TodoFormDialog', () => {
  let component: TodoFormDialog;
  let fixture: ComponentFixture<TodoFormDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoFormDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFormDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
