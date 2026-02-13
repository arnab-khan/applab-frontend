import { Component, input, output, inject, signal, effect } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisVertical, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../../../../shared/interfaces/todo';
import { TodoApi } from '../../services/todo-api';

@Component({
  selector: 'app-todo-list-item',
  imports: [CommonModule, DatePipe, MatMenuModule, MatCheckboxModule, FontAwesomeModule],
  templateUrl: './todo-list-item.html',
  styleUrl: './todo-list-item.scss',
})
export class TodoListItem {
  todo = input.required<Todo>();
  loaderState = output<boolean>();
  getTodo = output<void>();
  completed = signal(false);
  isCompleting = signal(false);
  private todoApi = inject(TodoApi);
  private snackBar = inject(MatSnackBar);

  faEllipsisVertical = faEllipsisVertical;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  constructor() {
    effect(() => {
      this.completed.set(this.todo().completed || false);
    });
  }

  onEdit() {

  }

  onDelete() {
    const confirmed = window.confirm('Are you sure you want to delete this todo?');
    if (!confirmed) {
      return;
    }
    const todoId = this.todo().id;
    this.loaderState.emit(true);
    this.todoApi.delete(todoId).subscribe({
      next: () => {
        this.getTodo.emit();
        this.snackBar.open('Todo deleted successfully', 'Close', {
          duration: 3000,
          panelClass: 'snackbar-success'
        });
      },
      error: (err) => {
        this.loaderState.emit(false);
        console.error('Error deleting todo', err);
        this.snackBar.open('Failed to delete todo', 'Close', {
          duration: 3000,
          panelClass: 'snackbar-error'
        });
      }
    });
  }

  onCompletedChange() {
    this.isCompleting.set(true);
    const previousState = this.completed();
    this.completed.update(value => !value);
    this.todoApi.markAsComplete({ id: this.todo().id }).subscribe({
      next: (updatedTodo) => {
        const completed = updatedTodo?.completed;
        const message = completed ? 'Todo marked as completed' : 'Todo marked as incomplete';
        this.snackBar.open(message, 'Close', {
          duration: 3000,
          panelClass: completed ? 'snackbar-success' : 'snackbar-info'
        });
        this.isCompleting.set(false);
      },
      error: (err) => {
        console.error('Error updating todo completion status', err);
        this.completed.set(previousState);
        this.snackBar.open('Failed to update todo status', 'Close', {
          duration: 3000,
          panelClass: 'snackbar-error'
        });
        this.isCompleting.set(false);
      }
    });
  }
}
