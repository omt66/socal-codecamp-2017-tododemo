import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';

@Component({
    selector: 'home',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})
export class HomeComponent implements OnInit {
    todoList;
    todoText;

    constructor(private dataService: DataService) {
        this.todoList = dataService.getTodoList();
    }

    ngOnInit() { }

    addTodo() {
        if (this.todoText == "")
            return;

        this.todoList.add({
            text: this.todoText,
            completed: false});

        this.todoText = "";
    }

    getNofTodos() {
        if (this.todoList) {
            return this.todoList.todos.length;
        }

        return 0;
    }
}
