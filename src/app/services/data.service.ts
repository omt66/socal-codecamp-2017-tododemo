import { Todo, TodoList } from 'app/models/todo';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    todoList: TodoList = new TodoList();

    constructor() {
        console.log("DataService instantiated");

        this.initTodos();

        this.todoList.addChangeListener(this);
    }

    initTodos() {
        console.log("Read from the local db");
        let db = window.localStorage;

        if (db) {
            let todos = db.getItem("todos");
            if (todos) {
                this.todoList.setTodos(JSON.parse(todos));
            }
        }
    }

    getTodoList() {
        return this.todoList;
    }

    notify(data) {
        console.log("Data changed!");

        // Save this to the local db
        console.log("Save to the local db");
        let db = window.localStorage;

        if (db) {
            let todosData = JSON.stringify(this.todoList.getTodos(), null, 2);
            console.log("Todos data" + todosData);
            db.setItem("todos", todosData);
        }
    }
}