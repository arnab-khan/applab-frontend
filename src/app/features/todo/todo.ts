import { Component, inject, viewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TodoFormDialog } from './components/todo-form-dialog/todo-form-dialog';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { TodoList } from './components/todo-list/todo-list';

@Component({
  selector: 'app-todo',
  imports: [
    MatDialogModule, 
    MatButtonModule, 
    FontAwesomeModule,
    TodoList,
  ],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  private dialog = inject(MatDialog);
  readonly todoList = viewChild(TodoList);
  faPlus = faPlus;
  faClipboardList = faClipboardList;

  openTodoForm() {
    const dialogRef = this.dialog.open(TodoFormDialog, {
      width: '50rem',
      maxHeight:'90%',
    });

    dialogRef.afterClosed().subscribe((result?: { created?: boolean }) => {
      if (result?.created) {
        this.todoList()?.resetTodo();
      }
    });
  }
}
