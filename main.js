// global veriables ******************

var makeTaskPlus = document.querySelector('.nav__add--task');
var makeTaskCard = document.querySelector('.nav__button--list');
var deleteButton = document.getElementById('nav__task--list');
var navTitleInput = document.querySelector('.nav__input--title');
var taskInputItem = document.querySelector('.task__input--item');
var navTaskList = document.getElementById('nav__task--list');
var clearButton = document.querySelector('.nav__button--clear');
var tempNavList = document.getElementById('task__temp--container');

var navTaskList = document.getElementById('nav__task--list');
var bodyMainSection = document.querySelector('.section__body--main');
var sectionTaskCard = document.getElementById('section__task--card');
var mainArray = [];
var taskArray = [];

// EVENT LISTENER *******************

window.addEventListener("load", onPageLoad);
makeTaskPlus.addEventListener("click", addTaskItem);
navTaskList.addEventListener("click", deleteTaskItem);
makeTaskCard.addEventListener("click", newToDoInstance);
clearButton.addEventListener("click", clearTaskItems);
// deleteButton.addEventListerner("click", clearTempTasks);

// FUNCTIONS ************************

function onPageLoad(e) {
  var retrievedArray = getTasksFromLocal();
};

function getTasksFromLocal(e) {
  return JSON.parse(localStorage.getItem('objectArray'));
}

function getTitle(e){
  return navTitleInput.value;
};

function getTask(e){
  return taskInputItem.value;
};

function addTaskItem() {
  var task = new Task({
    id: Date.now(),
    complete: false,
    text: getTask(),
  })
  taskArray.push(task);
  navTaskList.insertAdjacentHTML('afterbegin',
    `<ul id="task__temp--container" data-id=${task.id}>
        <button id="nav__task--icondelete">
          <img id="nav__task--icon" src="icons/delete.svg" alt="Delete Task"> 
        </button>
      <li>${getTask()}</li>
    </ul>`);
};

function deleteTaskItem(e) {
  e.target.closest('ul').remove('remove');
};

function clearTaskItems(e) {
  console.log('clear tasks function')
  e.target.closest('div').remove('remove');
};

function newToDoInstance(todo, e) {
  if(taskArray.length === 0 || navTitleInput.value === '') {
    return 'No tasks';
  } else {
  var todo = new ToDo ({ 
    id: Date.now(),
    title: getTitle(e),
    tasks: [],
    urgent: false
  });
  mainArray.push(todo);
  mainArray[0].newTask(taskArray[0]);
  todo.saveToStorage(mainArray);
  newTaskCards(todo);
};

function insertTasksList(array) {
   var ulList = `<ul class="article__ul">`;
    taskArray.forEach(function(array) {
     ulList += `<li class="article__item--li" data-id="${array.id}">
     <img src="icons/checkbox.svg" id="task__icon--checkbox">
     ${array.text}
     </li>`
  })
  return ulList
} 

function newTaskCards(e) {
	bodyMainSection.insertAdjacentHTML('afterbegin',
    `<container id="task__card--container" data-id='${todo.id}>
   	  <article id="section__task--card">
    		<h3>${todo.title}</h3>
    		  <div id="task__card--border">
    				<div id="taskListBox">
    					<article id="taskCardBody">
    				 	 <img id="body__icon--checkbox" src="icons/checkbox.svg" alt="Task list check box">
               <div class='article__ul'>${insertTasksList(mainArray)}</div>
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

function loadCardInfo(retrievedArray) {
  retrievedArray.forEach(function(retrievedArray) {
    newTaskCards(retrievedArray);
    var todo = new ToDo(retrievedArray);
    mainArray.push(todo);
    })
}

function insertTaskField(array) {
  console.log('insert task field');
  var ulList = `<ul class="article__ul">`;
    taskArray.forEach(function(task){ 
  ulList += `<li class="article__item--li" data-id="${todo.id}">;
   <img src="icons/checkbox.svg" id="task__card--checkbox">
     ${task.text}
   </li>`;
 })
};

function clearTempTasks(e) {
	e.target.closest('#task__temp--container').remove();
};

function clearInputs(e) {
  document.querySelectorAll(".task__input--item").forEach(input=>{
    taskInputItem.value = ""})
}
}

