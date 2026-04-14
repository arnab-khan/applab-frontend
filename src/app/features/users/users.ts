import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { LoadingButton } from '../../shared/components/buttons/loading-button/loading-button';
import { SortButton, SortDirection } from '../../shared/components/buttons/sort-button/sort-button';
import { SanitizeInput } from '../../shared/directives/sanitize-input';
import { User, UserPageResponse } from '../../shared/interfaces/user';
import { UsersApi } from './services/users-api';
import { UserItem } from './components/user-item/user-item';
import { Platform } from '../../shared/services/platform';
import { Seo } from '../../shared/services/seo';
import { Url } from '../../shared/services/url';

@Component({
  selector: 'app-users',
  imports: [CommonModule, FormsModule, UserItem, SanitizeInput, LoadingButton, SortButton],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  private usersApi = inject(UsersApi);
  private destroyRef = inject(DestroyRef);
  private search$ = new Subject<string>();
  private platformService = inject(Platform);
  private seo = inject(Seo);
  private url = inject(Url);

  users = signal<User[] | undefined>(undefined);
  currentPage = 0;
  pageSize = 12;
  hasMore = signal(true);
  isLoadingMore = signal(false);
  isLoadingList = signal(false);

  keyword = '';
  sortField = 'createdAt';
  sortDirection: SortDirection = 'desc';
  private lastSearchedKeyword = '';

  constructor() {
  }

  ngOnInit() {
    this.setSeo();
    this.isLoadingList.set(true);
    if (!this.platformService.isBrowser()) {
      return;
    }
    this.getUsersList();

    this.search$
      .pipe(debounceTime(500), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe((keyword) => {
        this.lastSearchedKeyword = keyword;
        this.currentPage = 0;
        this.users.set([]);
        this.getUsersList();
      });
  }

  private setSeo() {
    this.seo.update({
      title: 'Users',
      content: 'Explore public profiles across the platform.',
      image: this.url.toAbsoluteUrl('/public/images/profile/users.jpeg'),
      imageWidth: 500,
      imageHeight: 500,
    });
  }

  getUsersList() {
    const keyword = this.keyword?.trim();
    this.usersApi
      .getAll({
        page: this.currentPage,
        size: this.pageSize,
        sort: `${this.sortField},${this.sortDirection}`,
        ...(keyword && { keyword: this.keyword }),
      })
      .subscribe({
        next: (response: UserPageResponse) => {
          const currentUsers = this.users() || [];
          this.users.set([...currentUsers, ...response.content]);
          this.hasMore.set(!response.last);
          this.isLoadingList.set(false);
          this.isLoadingMore.set(false);
        },
        error: (err) => {
          console.error('Error fetching users', err);
          this.users.set([]);
          this.hasMore.set(false);
          this.isLoadingList.set(false);
          this.isLoadingMore.set(false);
        },
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

  onSortChange() {
    this.isLoadingList.set(true);
    this.currentPage = 0;
    this.users.set([]);
    this.getUsersList();
  }

  loadMore() {
    this.isLoadingMore.set(true);
    this.currentPage++;
    this.getUsersList();
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
}
