import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { BaseTodo, MarkTodoCompleteParams, Todo, TodoPageResponse, TodoQueryParams } from '../../../shared/interfaces/todo';
import { toHttpParams } from '../../../shared/utils/http';

@Injectable({
  providedIn: 'root',
})
export class TodoApi {
  private httpClient = inject(HttpClient);
  private baseApiUrl = `${environment.rootApiUrl}/todo`;

  add(body: BaseTodo) {
    return this.httpClient.post<Todo>(`${this.baseApiUrl}/add`, body);
  }

  update(body: BaseTodo) {
    return this.httpClient.patch<Todo>(`${this.baseApiUrl}/update`, body);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.baseApiUrl}/delete/${id}`);
  }

  getAll(params: TodoQueryParams) {
    return this.httpClient.get<TodoPageResponse>(`${this.baseApiUrl}/all`, { params: toHttpParams(params) });
  }

  markAsComplete(params: MarkTodoCompleteParams) {
    return this.httpClient.patch<Todo>(`${this.baseApiUrl}/complete`, null, { params: toHttpParams(params) });
  }
}