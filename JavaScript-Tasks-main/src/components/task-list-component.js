import { StatusLabel } from "../const.js";
import { createElement } from "../render.js";

function createListComponent(status) {
    return(
        `<div id="listCon">
            <h2 class="taskHeader header${status}">${StatusLabel.status}</h2>
        </div>`
    );
}

export class ListComponent {
    #status = null;

    constructor({status}){
        this.#status = status;
    }
      
    getTemplate() {
        return createListComponent(this.#status);
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