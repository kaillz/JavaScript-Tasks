import {render, RenderPosition} from './render.js';
import {HeaderComponent} from './components/header-component.js';
import {FormAddTaskComponent} from './components/form-add-task-component.js';
import { TasksConComponent } from './components/tasks-con-component.js';
import { ListComponent } from './components/task-list-component.js';
import { CardComponent } from './components/task-card-component.js';


const bodyContainer = document.getElementById('bodyApp');
const addTaskContainer = document.querySelector('.addTaskCon');
const tasksContainer = document.querySelector('.addTaskCon');


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), addTaskContainer, RenderPosition.BEFOREEND);
render(new TasksConComponent(), tasksContainer, RenderPosition.AFTEREND);

let i = 0;
const listContainer = document.querySelector('.taskCon');
while(i<4){
    render(new ListComponent(), listContainer, RenderPosition.AFTERBEGIN);
    let j = 0;
    const cardContainer = document.getElementById('listCon');
    while(j<3){
        render(new CardComponent(), cardContainer, RenderPosition.BEFOREEND);
        j++;
    }
    i++;
}

