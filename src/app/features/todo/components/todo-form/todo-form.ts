import { Component, inject, OnInit, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormFieldsComponent } from '../../../../shared/components/form/form-fields/form-fields';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';
import { CreateTodo } from '../../../../shared/interfaces/todo';
import { TodoApi } from '../../services/todo-api';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-form',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormFieldsComponent,
    SanitizeInput,
    LoadingButton,
    MatSnackBarModule,
  ],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.scss',
})
export class TodoForm implements OnInit {

  private todoApi = inject(TodoApi);
  private formBuilder = inject(NonNullableFormBuilder);
  private snackBar = inject(MatSnackBar);
  private dialogRef = inject(MatDialogRef, { optional: true });

  todoForm!: FormGroup<{
    title: FormControl<string>;
    description: FormControl<string>;
  }>;
  isSubmitting = signal(false);
  hasClickedSubmit = false;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.todoForm = this.formBuilder.group({
      title: [
        '',
        [
          commonFormValidator({
            required: true,
          }),
        ],
      ],
      description: [
        '',
        [
          commonFormValidator({
            required: true,
          }),
        ],
      ],
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
      const todoData: CreateTodo = {
        title: controls.title.value,
        description: controls.description.value,
      };
      this.todoApi.add(todoData).subscribe({
        next: (response) => {
          this.isSubmitting.set(false);
          this.snackBar.open('Todo added successfully', 'Close', { duration: 3000, panelClass: 'snackbar-success' });
          this.dialogRef?.close(true);
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