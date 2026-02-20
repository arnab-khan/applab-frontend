import { Component, inject, signal } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../../../../shared/interfaces/todo';
import { TodoForm } from '../todo-form/todo-form';

@Component({
  selector: 'app-todo-form-dialog',
  imports: [MatDialogModule, FontAwesomeModule, TodoForm],
  templateUrl: './todo-form-dialog.html',
  styleUrl: './todo-form-dialog.scss',
})
export class TodoFormDialog {
  private data = inject<{ todo?: Todo } | null>(MAT_DIALOG_DATA, { optional: true });
  todo = signal<Todo | null>(this.data?.todo ?? null);

  private dialogRef = inject(MatDialogRef<TodoFormDialog>);
  readonly faXmark = faXmark;

  onResetTodo() {
    this.dialogRef.close({
      created: true,
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
