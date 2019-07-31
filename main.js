// global veriables ******************

var makeTaskPlus = document.querySelector('.js__add--task');
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
var todos = [];

// EVENT LISTENER *******************

window.addEventListener("load", onPageLoud);
makeTaskPlus.addEventListener("click", addTaskItem);
navTaskList.addEventListener("click", deleteTaskItem);
makeTaskCard.addEventListener("click", newToDoInstance);
clearButton.addEventListener("click", clearTaskItems);
// deleteButton.addEventListerner("click", clearTempTasks);

// FUNCTIONS ************************

function getTasksFromLocal(e) {
  return JSON.parse(localStorage.getItem('localArray'));
};

function getTitle(e){
  return navTitleInput.value;
};

function getTask(e){
  return taskInputItem.value;
};

function onPageLoud(e) {
  console.log('On page loud');
  var retrievedArray = getTasksFromLocal();
  console.log('On page loud2');
  console.log(retrievedArray);
  if (retrievedArray.length > 0) {
  newTaskCards(e); 
  }
};

function addTaskItem() {
  var task = new Task({
    id: Date.now(),
    isCompleted: false,
    text: getTask(),
  })
  todos.push(task);
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

function newToDoInstance(e) {
  if(todos.length === 0 || navTitleInput.value === '') {
    return 'Add tasks please';
  }else{
  var todo = new ToDo ({ 
    id: Date.now(),
    title: getTitle(e),
    tasks: todos,
    urgent: false
  });
  mainArray.push(todo);
  mainArray[0].newTask(todos[0]);
  localStorage.setItem('localArray', JSON.stringify(todo));
  newTaskCards(todo);
};

function newTaskCards(todo) {
  getTasksFromLocal(e)
	// var imgSource = urgentColorState(todo);
	bodyMainSection.insertAdjacentHTML('afterbegin',
    `<container id="task__card--container" data-id='${todo.id}>
   	  <article id="section__task--card">
    		<h3>${todo.title}</h3>
    		  <div id="task__card--border">
    				<div id="taskListBox">
    					<article id="taskCardBody">
    				 	 <img id="body__icon--checkbox" src="icons/checkbox.svg" alt="Task list check box">
               <div class='article__ul'>${insertTaskField(localArray)}</div>
   		  	  	</article>
   		  		</div>
    		  </div>
    		  <div id="body__icon--bottom">
   		  		<img id="body__icon--urgent" src="icons/urgent.svg" alt="Make task urgent">
   		  		<img id="body__icon--delete" src="icons/delete.svg" alt="Delete the task">
   		  	</div>	
    	</article>
     </container>`);
  // insertTaskField(e);
};

function insertTaskField(array) {
  console.log('insert task field');
  var ulList = `<ul class="article__ul">`;
    todos.forEach(function(taskItem){ 
  ulList += `<li class="article__item--li" data-id="${todo.id}">;
   <img src="icons/checkbox.svg" id="task__card--checkbox">
     ${taskItem.text}
   </li>`;
 })
};

function findIndex(event) {
  var id = event.target.closest('.main__section__article').dataset.id;
  var getIndex = mainlArray.findIndex(obj => {
    return parseInt(id) === obj.id
  });
  return getIndex
};

function enableSaveButton(e) {
  if (taskItemInput.value != "" && navTitleInput.value !="") {
    makeTaskCard.disabled = false;
  }
};

function clearTempTasks(e) {
	e.target.closest('#task__temp--container').remove();
};

function clearInputs(e) {
  document.querySelectorAll(".task__input--item").forEach(input=>{
    taskInputItem.value = ""})
};
}

