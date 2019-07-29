class ToDo {
	constructor(id, title, tasks, urgent) {
		this.id = id
		this.title = title;
		this.tasks = [];
		this.urgent = urgent;
	}
	// ***Functions****
	saveToStorage(todos) {
		localStorage.setItem("todos", JSON.stringify(todos));
		// add to localStorage
	}
	deleteFromStorage() {
		localStorage.getItem("todos", JSON.stringify(todos));
		// remove from local storage
	}
	updatedTodo() {
		// push to array
	}

// ***Closing brace***
}


class Task {
    constructor(obj) {
        this.id = obj.id;
        this.isCompleted = obj.isCompleted || false;
        this.text = obj.text;
    }
}
