import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { CreateTodo, Todo, UpdateTodo } from '../../../shared/interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoApi {
  private httpClient = inject(HttpClient);
  private baseApiUrl = `${environment.rootApiUrl}/todo`;

  add(body: CreateTodo) {
    return this.httpClient.post<Todo>(`${this.baseApiUrl}/add`, body);
  }

  update(body: UpdateTodo) {
    return this.httpClient.patch<Todo>(`${this.baseApiUrl}/update`, body);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.baseApiUrl}/delete/${id}`);
  }

  getAll() {
    return this.httpClient.get<Todo[]>(this.baseApiUrl);
  }
}