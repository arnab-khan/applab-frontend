import { Component, Input } from '@angular/core';
import { Todo } from '../../../../shared/interfaces/todo';

@Component({
  selector: 'app-todo-list-item',
  imports: [],
  templateUrl: './todo-list-item.html',
  styleUrl: './todo-list-item.scss',
})
export class TodoListItem {
  @Input({ required: true }) todo!: Todo;
}
