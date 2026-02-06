import { Component, inject } from '@angular/core';
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
  faPlus = faPlus;
  faClipboardList = faClipboardList;

  openTodoForm() {
    this.dialog.open(TodoFormDialog, {
      width: '50rem',
      maxHeight:'90%',
    });
  }
}
