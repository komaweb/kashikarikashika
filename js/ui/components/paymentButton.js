import { createPersonView } from "./personView.js";

export function createPaymentButton(

    button,

    person

){

    button.replaceChildren();

    button.appendChild(

        createPersonView(

            person,

            {

                layout:"column",

                size:"medium"

            }

        )

    );

    const label = document.createElement("div");

    label.className =

        "payment-button-label";

    label.textContent =

        `${person.name}が支払った`;

    button.appendChild(label);

}
