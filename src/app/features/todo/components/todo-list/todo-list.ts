import { Component, inject, output, signal, OnInit, DestroyRef, effect, Injector } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { TodoApi } from '../../services/todo-api';
import { TodoListItem } from '../todo-list-item/todo-list-item';
import { Todo } from '../../../../shared/interfaces/todo';
import { Auth } from '../../../../core/services/auth';
import { Platform } from '../../../../shared/services/platform';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';
import { SortButton, SortDirection } from '../../../../shared/components/buttons/sort-button/sort-button';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';

@Component({
  selector: 'app-todo-list',
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    FontAwesomeModule,
    TodoListItem,
    LoadingButton,
    SortButton,
    SanitizeInput,
  ],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  private todoApi = inject(TodoApi);
  private auth = inject(Auth);
  private platformService = inject(Platform);
  private destroyRef = inject(DestroyRef);
  private search$ = new Subject<string>();

  createRequested = output<void>();
  faClipboardList = faClipboardList;

  todos = signal<Todo[] | undefined>(undefined);
  authState = this.auth.authState;
  currentPage = 0;
  pageSize = 6;
  hasMore = signal(true);
  isLoadingMore = signal(false);
  isLoadingList = signal(false);

  keyword = '';
  completedFilter: boolean | undefined = undefined;
  sortField = 'updatedAt';
  sortDirection: SortDirection = 'desc';
  private lastSearchedKeyword = '';

  constructor() {
    effect(() => {
      if (!this.platformService.isBrowser()) {
        return;
      }
      const state = this.authState();
      if (state.status === 'authenticated' && state.user?.id) {
        this.isLoadingList.set(true);
        this.getTodoList();
      }
    });

    this.search$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((keyword) => {
      this.lastSearchedKeyword = keyword;
      this.currentPage = 0;
      this.todos.set([]);
      this.getTodoList();
    });
  }

  getTodoList() {
    const keyword = this.keyword?.trim();
    this.todoApi.getAll({
      page: this.currentPage,
      size: this.pageSize,
      sort: `${this.sortField},${this.sortDirection}`,
      ...(keyword && { keyword: this.keyword }),
      completed: this.completedFilter
    }).subscribe({
      next: (response) => {
        console.log('todoList', response);
        const currentTodos = this.todos() || [];
        this.todos.set([...currentTodos, ...response.content]);
        this.hasMore.set(!response.last);
        this.isLoadingList.set(false);
        this.isLoadingMore.set(false);
      },
      error: (err) => {
        console.error('Error fetching todos', err);
        this.todos.set([]);
        this.isLoadingList.set(false);
        this.isLoadingMore.set(false);
      }
    });
  }

  onSearch(keyword: string) {
    this.keyword = keyword;
    const trimmedKeyword = this.keyword?.trim();
    this.isLoadingList.set(true);
    if (trimmedKeyword === this.lastSearchedKeyword) {
      this.isLoadingList.set(false);
      return;
    }
    this.search$.next(trimmedKeyword);
  }

  changeStatus(completed: boolean | undefined) {
    this.completedFilter = completed;
    this.isLoadingList.set(true);
    this.currentPage = 0;
    this.todos.set([]);
    this.getTodoList();
  }

  onSortChange() {
    this.isLoadingList.set(true);
    this.currentPage = 0;
    this.todos.set([]);
    this.getTodoList();
  }

  loadMore() {
    this.isLoadingMore.set(true);
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

  onTodoLoaderStateChange(isLoading: boolean) {
    this.isLoadingList.set(isLoading);
  }

  private resetTodoListState() {
    this.keyword = '';
    this.completedFilter = undefined;
    this.sortField = 'updatedAt';
    this.sortDirection = 'desc';
    this.currentPage = 0;
    this.todos.set([]);
  }

  resetTodo() {
    this.isLoadingList.set(true);
    this.resetTodoListState();
    this.getTodoList();
  }
}
