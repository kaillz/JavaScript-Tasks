import { createElement } from "../render.js";
import { AbstractComponent } from "./AbstractComponent.js";

function createClearBtnComponent() {
    return(
        `<button class="clearBtnStyle">✕ Очистить</button>
        `
    );
}

export class ClearBtn extends AbstractComponent {
    getTemplate() {
        return createClearBtnComponent();
    }

}