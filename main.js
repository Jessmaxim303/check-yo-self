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
var bodyIconDelete = document.getElementById('body__icon--delete');
var mainArray = JSON.parse(localStorage.getItem('objectArray')) || [];
var taskArray = [];

// EVENT LISTENER *******************

window.addEventListener("load", onPageLoad);
makeTaskPlus.addEventListener("click", addTaskItem);
navTaskList.addEventListener("click", deleteTaskItem);
makeTaskCard.addEventListener("click", newToDoInstance);
clearButton.addEventListener("click", clearAll);
bodyIconDelete.addEventListener("click" deleteTaskCard);

// FUNCTIONS ************************

function newTaskCards(todo) {
  console.log('maketask')
  bodyMainSection.insertAdjacentHTML('afterbegin',
    `<container id="task__card--container" data-id='${todo.id}>
      <div id="section__task--card">
           <section class='todo_title'>${todo.title}</section>
              <article id="task__card--border">
               <div class='article__ul'>${insertTasksList(todo)}</div>
              </article>
          <div id="body__icon--bottom">
            <img id="body__icon--urgent" src="icons/urgent.svg" alt="Make task urgent">
            <img id="body__icon--delete" src="icons/delete.svg" alt="Delete the task">
          </div>  
      </div>
     </container>`);
};

function onPageLoad() {
  appendList();
};

function appendList() {
  mainArray.forEach(todo => newTaskCards(todo));
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
  clearFields(e)
};

deleteTaskCard() {

}

function deleteTaskItem(e) {
  e.target.closest('ul').remove('remove');
};

function clearAllTasks(e) {
 var clearsAll = document.querySelectorAll('')
}

function clearAll(e) {
  var clears = document.querySelectorAll('ul');
  clears.innerHTML = '';
  navTaskList.innerHTML = '';
  clearFields(e);
};

function clearFields(e) {
  document.querySelectorAll('input').forEach(input=>{
    input.value = ""
  })
};

function newToDoInstance(e) {
  if(mainArray.length === 0 || navTitleInput.value === '') {
    return 'No tasks';
  } else {
  var todo = new ToDo ({ 
    id: Date.now(),
    title: getTitle(e),
    tasks: taskArray,
    urgent: false
  });
  mainArray.push(todo);
  newTaskCards(todo);
  todo.saveToStorage(mainArray)
  taskArray = [];
  clearFields(e);
  clearAll(e);
  }
};

function insertTasksList(todo) {
   var ulList = `<ul class="article__ul">`;
    todo.tasks.forEach(function(task) {
     ulList += `<li class="article__item--li" data-id="${task.id}">
     <img src="icons/checkbox.svg" id="task__icon--checkbox">
     ${task.text}
     </li>`
  })
  return ulList
}; 

function loadCardInfo(retrievedArray) {
  retrievedArray.forEach(function(retrievedArray) {
    newTaskCards(retrievedArray);
    var todo = new ToDo(retrievedArray);
    mainArray.push(todo);
    })
};

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

