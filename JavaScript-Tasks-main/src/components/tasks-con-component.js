import { createElement } from "../render.js";

function createTasksComponentCon() {
    return(
        `<section class="taskCon">
        </section>`
    );
}

export class TasksConComponent {
    getTemplate() {
        return createTasksComponentCon();
    }
    getElement() {
        if (!this.element) {
        this.element = createElement(this.getTemplate());
    }

    return this.element;
    }

    removeElement() {
        this.element = null;
    }
}