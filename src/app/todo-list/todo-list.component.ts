import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

export class Todo {

  constructor(title?: string) {
    this.title = title;
    this.checked = false;
    this.id = 0;
  }

  id: number;
  title: string;
  description: string;
  checked: boolean;
}

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  async getTodos() {
    this.todos = await this.todoService.getTodos();
  }

  async createTodo(event) {
    let todo = await this.todoService.createTodo(new Todo(event.title));
    this.todos.push(todo);
  }

  async editTodo(event) {
    await this.todoService.editTodo(event);
  }
}
