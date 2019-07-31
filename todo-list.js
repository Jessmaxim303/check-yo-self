class ToDo {
	constructor(object) {
		this.id = object.id
		this.title = object.title;
		this.tasks = object.tasks;
		this.urgent = object.urgent;
	}
	// ***Functions****

	saveToStorage(todos) {
		localStorage.setItem("todo", JSON.stringify(todos));
	}

	deleteFromStorage() {
		localStorage.removeItem("todos", JSON.stringify(todos));
		// get item back from local storage
	}

	newTask(task) {
	this.tasks.push(task)
	}

// ***Closing brace***
};

class Task {
    constructor(obj) {
        this.id = obj.id;
        this.text = obj.text;
    }

// ***Closing brace***
};
