import { Component, inject, output, signal, OnInit, DestroyRef, effect, Injector } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { TodoApi } from '../../services/todo-api';
import { TodoListItem } from '../todo-list-item/todo-list-item';
import { Todo } from '../../../../shared/interfaces/todo';
import { Auth } from '../../../../core/services/auth';
import { Platform } from '../../../../shared/services/platform';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FontAwesomeModule, TodoListItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList implements OnInit {
  private todoApi = inject(TodoApi);
  private auth = inject(Auth);
  private platformService = inject(Platform);

  createRequested = output<void>();
  faClipboardList = faClipboardList;

  todos = signal<Todo[] | undefined>(undefined);
  user = this.auth.user;
  userLoaded = this.auth.userLoaded;

  constructor() {
    effect(() => {
      if (!this.platformService.isBrowser()) {
        return;
      }
      if (this.userLoaded() && this.user()?.id) {
        this.getTodoList();
      }
    });
  }

  ngOnInit() { }

  getTodoList() {
    this.todoApi.getAll().subscribe({
      next: (response) => {
        console.log('todoList', response);
        this.todos.set(response);
      },
      error: (err) => {
        console.error('Error fetching todos', err);
        this.todos.set([]);
      }
    });
  }

  openTodoForm() {
    this.createRequested.emit();
  }
}
