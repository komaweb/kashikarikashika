import { createPersonView } from "./personView.js";

export function updateBalancePerson(

    target,

    person,

    text

){

    target.replaceChildren();

    target.appendChild(

        createPersonView(person)

    );

    target.append(

        text

    );

}
