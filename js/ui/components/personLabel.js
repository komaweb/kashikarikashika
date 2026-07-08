import { createPersonText } from "./personText.js";

export function createPersonLabel(person){

    return createPersonText(

        person,

        "が支払いました"

    );

}
