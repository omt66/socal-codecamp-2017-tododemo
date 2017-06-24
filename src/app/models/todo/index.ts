export class Todo {
    text: string;
    completed: boolean;
}

export class TodoList {
    todos: Todo[] = [];
    listeners = [];

    setTodos(todos) {
        this.todos = todos;
    }

    getTodos() {
        return this.todos;
    }

    add(todo: Todo) {
        this.todos.push(todo);
        this.notifyListeners();
    }

    remove(todo: Todo) {
        let index = this.todos.indexOf(todo);

        if (index != -1) {
            this.todos.splice(index, 1);
            this.notifyListeners();
        }
    }

    edit(todo: Todo) {
        console.log("Edited todo", todo);
        this.notifyListeners();
    }

    addChangeListener(listener) {
        this.listeners.push(listener);
    }

    notifyListeners() {
        setTimeout(() => {
            console.log("Now informing...");
            this.listeners.forEach(listener => listener.notify(this));
        }, 100);
    }
}
