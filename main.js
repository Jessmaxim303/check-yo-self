// inner text function
var makeNavList = document.querySelector('.nav__button--task');
var makeTaskCard = document.querySelector('.nav__button--list');
var deleteButton = document.getElementById('nav__task--list');
var navTitleInput = document.querySelector('.nav__input--title');
var taskItemInput = document.querySelector('.nav__input--item');

var taskTempContainer = document.getElementById('task__temp--container');
var bodyMainSection = document.querySelector('.section__body--main');
var sectionTaskCard = document.getElementById('section__task--card');
var clearButton = document.getElementById('nav__button--clear');
var navTaskList = document.getElementById('nav__task--list');
var todos = [];


// EVENT LISTENER *******************

makeNavList.addEventListener("click", tempTaskList);
makeTaskCard.addEventListener("click", newTaskCards);
// deleteButton.addEventListerner("click", clearTempTasks);

// FUNCTIONS ************************
function getTitle(e){
  return navTitleInput.value
}

function getTask(e){
  return taskItemInput.value
}

function enableSaveButton(e) {
  if (taskItemInput.value !="" && navTitleInput.value !="") {
    makeTaskCard.disabled = false;
  }
}

function disableSaveButton(e) {
  makeTaskCard.disabled = true;
}

function newToDoInstance(){
  var title = getTitle();
  var task = getTask();
  var todo = new Todo(Date.now(), title, task, false);
  // todos.unshift(todo);
  enableSaveButton();
  todo.saveToStorage(todos);
  newTaskCards(todo);
};



// function saveTodo(objectArray) {
// 	var todo = new ToDo(Date.now(), titleInput.value, todo[i], urgent.value);
// 	toDoArray.push(todos);
// 	colsole.log(todos)
// };

// function saveToDo(objectArray) {
//   var toDo = new ToDoList(Date.now(), navTitleInput.value, objectArray);
//   toDoArray.push(toDo);
//   toDo.saveToStorage(toDoArray);
//   createCard(toDo);
// };

function tempTaskList(e) {
	console.log('hello task');
	todos.push(taskItemInput.value);
  navTaskList.insertAdjacentHTML('afterbegin',
    `<article id="task__temp--container">
    	  <button id="nav__task--icondelete">
      	  <img id="nav__task--icon" src="icons/delete.svg" alt="Delete Task">	
      	</button>
   	  <li>${taskItemInput.value}</li>
    </article>`);
  clearInputs(e);
};

function clearTempTasks(e) {
	console.log("clear temp tasks")
	e.target.closest('#task__temp--container').remove();
};

// data-id = ${idea.id}
function newTaskCards(todo) {
	// var imgSource = urgentColorState(todo);
	bodyMainSection.insertAdjacentHTML('afterbegin',
    `<container id="task__card--container">
   	  <article id="section__task--card">
    		<h3>${navTitleInput.value}</h3>
    		  <div id="task__card--border">
    				<div id="taskListBox">
    					<article id="taskCardBody">
    				 	 <img id="body__icon--checkbox" src="icons/checkbox.svg" alt="Task list check box">
   		  		 	 <p>${taskItemInput.value}</p>
   		  	  	</article>
   		  		</div>
    		  </div>
    		  <div id="body__icon--bottom">
   		  		<img id="body__icon--urgent" src="icons/urgent.svg" alt="Make task urgent">
   		  		<img id="body__icon--delete" src="icons/delete.svg" alt="Delete the task">
   		  	</div>	
    	</article>
     </container>`);
};

function clearInputs(e) {
  document.querySelectorAll(".nav__input--item").forEach(input=>{
    input.value = "";
  });
};

// function urgentColorState() {

// };


// HTML
// <input type="text" placeholder ="Add List" id="listItem"/>
// <button id="addButton">add Item</button>
// <button id="clearButton">Clear Items</button>
// <ul id="output"></ul>



//   function addTempList(e) {
//   	colosole.log('addTempList working!');
//     var text = document.getElementById('nav__button--list').value;
//     var addItem = document.getElementById('nav__task--list');
//     var entry = document.createElement("li");
//     text += '<img id="nav__task--icondelete" src="icons/delete.svg" alt="Delete Task">';
//     entry.innerHTML = text;    
//     addItem.appendChild(entry);
//     clearInputs(e);
// };


// 	function clearTempTasks(e) {
//     var text = document.getElementById('listItem');
//     var addItem = document.getElementById('output');
//     addItem.innerHTML = '';
//     text.value = '';
// };

// `$(document)`.on('click','.deleteButton', function() {
//     $(this).parent().remove();    
// });











