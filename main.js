// inner text function

var navTaskList = document.getElementById('nav__task--list');
var makeNavList = document.querySelector('.nav__button--task');
var taskItemInput = document.querySelector('.nav__input--item');
var taskTempContainer = document.getElementById('task__temp--container');
var bodyMainSection = document.querySelector('.section__body--main');
var makeTaskCard = document.querySelector('.nav__button--list');
var navTitleInput = document.querySelector('.nav__input--title');
var sectionTaskCard = document.getElementById('section__task--card');
// var makeCards = document.querySelector('');

// EVENT LISTENER *******************

makeNavList.addEventListener("click", tempTaskList);
makeTaskCard.addEventListener("click", newTaskCards);


// FUNCTIONS ************************

function tempTaskList(e) {
	event.preventDefault();
  navTaskList.insertAdjacentHTML('afterbegin',
    `<article id="task__temp--container">
      	<img id="nav__task--icondelete" src="icons/delete.svg" alt="Delete Task">
   	  <h4>${taskItemInput.value}</h4>
    </article>`)
}
// data-id = ${idea.id}
function newTaskCards(e) {
	console.log('hello');
	event.preventDefault();
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
     </container>`)
}

// <container id="task__card--container">
// <article id="section__task--card">




