import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todo-list/todo-list.component';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Output() save:EventEmitter<any> = new EventEmitter();

  isEditing: boolean = false;

  saveItem(todo: Todo){
    this.isEditing = false;
    this.save.emit(todo);
  }

  checkItem(todo: Todo){
    todo.checked = !todo.checked;
    this.save.emit(todo);
  }

  @Input() todo: Todo = new Todo('');
  @Input() isNew: boolean = false;
}