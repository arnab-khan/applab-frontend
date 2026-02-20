import { Component, effect, inject, input, output, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormFieldsComponent } from '../../../../shared/components/forms/form-fields/form-fields';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';
import { BaseTodo } from '../../../../shared/interfaces/todo';
import { TodoApi } from '../../services/todo-api';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Todo } from '../../../../shared/interfaces/todo';
import { AutoResizeTextarea } from '../../../../shared/directives/auto-resize';

@Component({
  selector: 'app-todo-form',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormFieldsComponent,
    SanitizeInput,
    LoadingButton,
    MatSnackBarModule,
    AutoResizeTextarea
  ],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.scss',
})
export class TodoForm {

  todo = input<Todo | null>(null);
  resetTodo = output<void>();

  private todoApi = inject(TodoApi);
  private formBuilder = inject(NonNullableFormBuilder);
  private snackBar = inject(MatSnackBar);

  todoForm!: FormGroup<{
    title: FormControl<string>;
    description: FormControl<string>;
  }>;
  isSubmitting = signal(false);
  hasClickedSubmit = false;

  constructor() {
    this.createForm();
    effect(() => {
      this.patchFromValue();
    });
  }

  createForm() {
    this.todoForm = this.formBuilder.group({
      title: [
        '',
        [
          commonFormValidator({
            required: true,
            maxLength: 50,
          }),
        ],
      ],
      description: [
        '',
        [
          commonFormValidator({
            required: true,
            maxLength: 255,
          }),
        ],
      ],
    });
  }

  patchFromValue() {
    const todo = this.todo();
    if (!todo) {
      return;
    }
    this.todoForm.patchValue({
      title: todo.title ?? '',
      description: todo.description ?? '',
    });
  }

  onSubmit(): void {
    this.hasClickedSubmit = true;
    if (this.todoForm.valid) {
      this.isSubmitting.set(true);
      this.addTodo();
    }
  }

  addTodo() {
    if (this.todoForm.valid) {
      const controls = this.todoForm.controls;
      const id = this.todo()?.id;
      const todoData: BaseTodo = {
        ...(id && { id: id }),
        title: controls.title.value,
        description: controls.description.value,
      };
      const request$ = id ? this.todoApi.update(todoData) : this.todoApi.add(todoData);
      request$.subscribe({
        next: () => {
          this.snackBar.open('Todo added successfully', 'Close', { duration: 3000, panelClass: 'snackbar-success' });
          this.resetTodo.emit();
        },
        error: (error) => {
          this.isSubmitting.set(false);
          const message = error.error?.message || 'Failed to add todo. Please try again.';
          this.snackBar.open(message, 'Close', { duration: 5000, panelClass: 'snackbar-error' });
        },
      });
    }
  }
}
