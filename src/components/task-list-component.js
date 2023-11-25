import { createElement } from "../render.js";

function createListComponent() {
    return(
        `<div id="listCon">
            <h2 class="taskHeader headerBackLog">Название блока</h2>
        </div>`
    );
}

export class ListComponent {
    getTemplate() {
        return createListComponent();
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