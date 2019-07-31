class ToDo {
	constructor(object) {
		this.id = object.id
		this.title = object.title;
		this.tasks = object.tasks;
		this.urgent = object.urgent;
	}
	// ***Functions****

	saveToStorage(array) {
		localStorage.setItem("objectArray", JSON.stringify(array));
	}

	deleteFromStorage() {
		
	}

	newTask(taskArray) {
	this.tasks.push(taskArray);
	}

};

class Task {
    constructor(obj) {
        this.id = obj.id;
        this.text = obj.text;
        this.complete = false;
    }


};
