import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';

@Component({
    selector: 'search',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})
export class SearchComponent implements OnInit {
    todoList;

    constructor(private dataService: DataService) {
        this.todoList = dataService.getTodoList();
    }


    ngOnInit() { }
}