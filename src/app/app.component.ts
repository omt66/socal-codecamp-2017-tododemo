import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Todo, TodoList } from "app/models/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Todo Demo App for SoCal Code Camp @ UCSD';

  todoList: TodoList;

  constructor(private dataService: DataService) {
    this.todoList = dataService.getTodoList();
  }
}

