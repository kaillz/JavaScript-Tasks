import { createElement } from "../render.js";

function createCardComponent(status, title) {
    return(
        `<p class="taskCard card${status}">${title}</p>
        `
    );
}

export class CardComponent {
    #id = null;
    #status = null;
    #title = null;

    constructor({id, title, status}){
        this.#id = id;
        this.#status = status;
        this.#title = title;
        console.log(id, title, status);
    }
      

    getTemplate() {
        return createCardComponent(this.#status, this.#title);
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