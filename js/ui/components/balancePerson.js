import { createPersonView } from "./personView.js";

export function updateBalancePerson(

    target,

    person,

    text

){

    target.replaceChildren();

    target.className =

        "balance-person";

    target.appendChild(

        createPersonView(

            person,

            {

                layout:"column",

                size:"large"

            }

        )

    );

    const label = document.createElement("div");

    label.className =

        "balance-person-label";

    label.textContent = text;

    target.appendChild(label);

}
