import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { TodoForm } from '../todo-form/todo-form';

@Component({
  selector: 'app-todo-form-dialog',
  imports: [MatDialogModule, TodoForm],
  templateUrl: './todo-form-dialog.html',
  styleUrl: './todo-form-dialog.scss',
})
export class TodoFormDialog {}
