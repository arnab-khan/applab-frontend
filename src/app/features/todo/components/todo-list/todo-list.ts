import { Component, inject, output, signal, OnInit, DestroyRef, effect, Injector } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClipboardList, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { TodoApi } from '../../services/todo-api';
import { TodoListItem } from '../todo-list-item/todo-list-item';
import { Todo } from '../../../../shared/interfaces/todo';
import { Auth } from '../../../../core/services/auth';
import { Platform } from '../../../../shared/services/platform';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule, MatSelectModule, MatFormFieldModule, FontAwesomeModule, TodoListItem, LoadingButton],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList implements OnInit {
  private todoApi = inject(TodoApi);
  private auth = inject(Auth);
  private platformService = inject(Platform);

  createRequested = output<void>();
  faClipboardList = faClipboardList;
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

  todos = signal<Todo[] | undefined>(undefined);
  authState = this.auth.authState;
  currentPage = 0;
  pageSize = 3;
  hasMore = signal(true);
  isLoadingMore = signal(false);
  
  keyword = '';
  completedFilter: boolean | undefined = undefined;
  sortField = 'createdAt';
  sortDirection = 'desc';

  constructor() {
    effect(() => {
      if (!this.platformService.isBrowser()) {
        return;
      }
      const state = this.authState();
      if (state.status === 'authenticated' && state.user?.id) {
        this.getTodoList();
      }
    });
  }

  ngOnInit() { }

  getTodoList() {
    this.isLoadingMore.set(true);
    this.todoApi.getAll({ 
      page: this.currentPage, 
      size: this.pageSize, 
      sort: `${this.sortField},${this.sortDirection}`,
      keyword: this.keyword || undefined,
      completed: this.completedFilter
    }).subscribe({
      next: (response) => {
        console.log('todoList', response);
        const currentTodos = this.todos() || [];
        this.todos.set([...currentTodos, ...response.content]);
        this.hasMore.set(!response.last);
        this.isLoadingMore.set(false);
      },
      error: (err) => {
        console.error('Error fetching todos', err);
        this.todos.set([]);
        this.isLoadingMore.set(false);
      }
    });
  }

  onSearch() {
    this.currentPage = 0;
    this.todos.set([]);
    this.getTodoList();
  }

  onFilterChange() {
    this.currentPage = 0;
    this.todos.set([]);
    this.getTodoList();
  }

  onSortChange() {
    this.currentPage = 0;
    this.todos.set([]);
    this.getTodoList();
  }

  loadMore() {
    this.currentPage++;
    this.getTodoList();
  }

  toggleSort(field: string) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'desc' ? 'asc' : 'desc';
    } else {
      this.sortField = field;
      this.sortDirection = 'desc';
    }
    this.onSortChange();
  }

  openTodoForm() {
    this.createRequested.emit();
  }
}
