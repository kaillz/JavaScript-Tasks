import {render, RenderPosition} from './render.js';
import {HeaderComponent} from './components/header-component.js';
import {FormAddTaskComponent} from './components/form-add-task-component.js';
import { TasksConComponent } from './components/tasks-con-component.js';
import { ListComponent } from './components/task-list-component.js';
import { CardComponent } from './components/task-card-component.js';
import { TasksService } from './service/TaskService.js';
import { Status } from './const.js';
import { ClearBtn } from './components/clear-btn-component.js';


const bodyContainer = document.getElementById('bodyApp');
const addTaskContainer = document.querySelector('.addTaskCon');
const tasksContainer = document.querySelector('.addTaskCon');
const taskService = new TasksService();
// const Status = new Status;

let result = Object.keys(Status).map((key) => [key, Status[key]]);
// const boardTasks = [...taskService.getBoardTasks()];

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), addTaskContainer);
render(new TasksConComponent(), tasksContainer, RenderPosition.AFTEREND);

let i = 0;
const listContainer = document.querySelector('.taskCon');
while(i<4){
    const listComponent = new ListComponent({status: result[i][1]});
    render(listComponent, listContainer, RenderPosition.BEFOREEND);
    let tasks = taskService.getTasksByStatus(result[i][1]);
    tasks.forEach(task => {
        render(new CardComponent({id: task.id, title: task.title, status: task.status}), listComponent.getElement());
    });
    if(i == 3){
        render(new ClearBtn(), listComponent.getElement(), RenderPosition.BEFOREEND);
    }
    i++;
}