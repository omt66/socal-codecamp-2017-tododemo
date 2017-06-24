import { TodoList } from './../../models/todo/index';
import { Todo } from 'app/models/todo';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.html',
    styleUrls: [`./todo-item.scss`],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
    @Input() todo: Todo;
    @Output() deleted: EventEmitter<Todo> = new EventEmitter();
    @Output() edited: EventEmitter<Todo> = new EventEmitter();

    editing = false;
    editedText: string;
    cntr = 0;
    timerId;

    constructor() { }

    ngOnInit() {
        console.log("TodoComponent ngOnInit()");
        // this.timerId = setInterval(() => {
        //     this.cntr++;
        // }, 1000);
    }

    ngOnDestroy() {
        console.log("TodoComponent ngOnDestroy()");
        clearInterval(this.timerId);
    }

    handleEdit(todo) {
        if (this.editedText) {
            todo.text = this.editedText;
        }
        this.editing = false;
    }

    handleDelete(todo) {
        if (this.deleted) {
            this.deleted.emit(todo);
        }
    }

    handleCheckbox(todo) {
        this.edited.emit(todo);
    }
}

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.html',
    styleUrls: [`./todo-list.scss`]
})
export class TodoListComponent implements OnInit {
    @Input() todoList: TodoList;

    constructor() { }

    ngOnInit() { }

    handleDelete(todo) {
        console.log("Will delete todo now", todo);
        this.todoList.remove(todo);
    }

    handleEdit(todo) {
        console.log("Todo item edited");
        this.todoList.edit(todo);
    }
}