import { createPersonView } from "./personView.js";

export function createPersonText(person,text){

    const element = document.createElement("div");

    element.className = "history-detail";

    element.appendChild(

        createPersonView(person)

    );

    element.append(

        text

    );

    return element;

}
