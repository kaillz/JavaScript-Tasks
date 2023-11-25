import { createElement } from "../render.js";

function createCardComponent() {
    return(
        `<p class="taskCard cardBackLog">Название первой задачи</p>
        `
    );
}

export class CardComponent {
    getTemplate() {
        return createCardComponent();
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