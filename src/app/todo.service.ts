import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Todo } from './todo-list/todo-list.component';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
  private todoApi = 'http://todo-api.dev/todos';
  constructor(private http: Http) { }

  async getTodos(): Promise<Todo[]> {
    let todoData = await this.http.get(this.todoApi).toPromise();
    return todoData.json().todos as Todo[];
  }

  async editTodo(todo: Todo): Promise<Todo> {
    let editData = await this.http.put(`${this.todoApi}/${todo.id}`, {todo: todo}).toPromise();
    return editData.json().todo as Todo;
  }

  async createTodo(todo: Todo): Promise<Todo> {
    let todoData = await this.http.post(`${this.todoApi}`, {todo}).toPromise();
    return todoData.json().todo as Todo;
  }
}