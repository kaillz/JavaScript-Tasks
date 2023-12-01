import { StatusLabel } from "../const.js";
import { createElement } from "../render.js";
import { AbstractComponent } from "./AbstractComponent.js";

function createListComponent(status) {
    return(
        `<div id="listCon">
            <h2 class="taskHeader header${status}">${StatusLabel[status]}</h2>
        </div>`
    );
}

export class ListComponent extends AbstractComponent{
    #status = null;
    
    constructor({status}){
        super();
        this.#status = status;
    }
    
    getTemplate() {
        return createListComponent(this.#status);
    }
}