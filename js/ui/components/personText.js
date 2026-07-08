import { createPersonView } from "./personView.js";

export function createPersonText(

    person,

    text,

    options={}

){

    const element = document.createElement("div");

    element.classList.add(

        "person-text"

    );

    element.appendChild(

        createPersonView(

            person,

            options

        )

    );

    const label = document.createElement("div");

    label.className = "person-label";

    label.textContent = text;

    element.appendChild(label);

    return element;

}
