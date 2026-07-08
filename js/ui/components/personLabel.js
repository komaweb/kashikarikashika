import { createPersonView } from "./personView.js";

export function createPersonLabel(person){

    const element = document.createElement("div");

    element.className = "history-detail";

    element.appendChild(

        createPersonView(person)

    );

    element.append(

        "が支払いました"

    );

    return element;

}
