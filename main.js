// inner text function
var makeTaskPlus = document.querySelector('.js__add--task');
var makeTaskCard = document.querySelector('.nav__button--list');
var deleteButton = document.getElementById('nav__task--list');
var navTitleInput = document.querySelector('.nav__input--title');
var taskInputItem = document.querySelector('.task__input--item');
var navTaskList = document.getElementById('nav__task--list');

var navTaskList = document.getElementById('nav__task--list');
var bodyMainSection = document.querySelector('.section__body--main');
var sectionTaskCard = document.getElementById('section__task--card');
var clearButton = document.getElementById('nav__button--clear');
var todos = [];


// EVENT LISTENER *******************

makeTaskPlus.addEventListener("click", addTaskItem);
navTaskList.addEventListener("click", deleteTaskItem);
// makeTaskCard.addEventListener("click", newToDoInstance);
// deleteButton.addEventListerner("click", clearTempTasks);

// FUNCTIONS ************************
function getTitle(e){
  return navTitleInput.value;
}

function getTask(e){
  return taskInputItem.value;
}

function addTaskItem() {
  var task = new Task({
    id: Date.now(),
    isCompleted: false,
    text: getTask(),
  });
  todos.push(task);
  navTaskList.insertAdjacentHTML('afterbegin',
    `<ul id="task__temp--container" data-id=${task.id}>
        <button id="nav__task--icondelete">
          <img id="nav__task--icon" src="icons/delete.svg" alt="Delete Task"> 
        </button>
      <li>${getTask()}</li>
    </ul>`);
clearInputs()
}

function deleteTaskItem(e) {
  e.target.closest('ul').remove('remove');
}

function populateTasks(array) {
   var taskList = `<ul class="article__ul">`;
    tasks.forEach(function(todos) {
     ulList += `<li class="article__item--li" data-id="${taskItem.id}">
     <img src="images/checkbox.svg" class="article__img--checkbox">
     ${taskItem.text}
     </li>`
  })
  return ulList
}


function enableSaveButton(e) {
  if (taskItemInput.value !="" && navTitleInput.value !="") {
    makeTaskCard.disabled = false;
  }
}

function disableSaveButton(e) {
  makeTaskCard.disabled = true;
}

function taskSave(todo){      
   e.preventDefault()
  if(e.target === makeTaskCard){
    newToDoInstance()
    clearInputs(e)
    disableSaveButton();
  }
}

function saveTodo(objectArray) {
	var todo = new ToDo(Date.now(), titleInput.value, todos, urgent.value);
	toDoArray.push(todos);
	colsole.log(todos)
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
               <div class='article__ul'>${populateTasks(globalArray)}</div>
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
  document.querySelectorAll(".task__input--item").forEach(input=>{
    input.value = "";
  });
};

// function urgentColorState() {

// };

