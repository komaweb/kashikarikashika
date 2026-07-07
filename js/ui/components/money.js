import { formatMoney } from "../format.js";

export function createMoney(amount){

    const element = document.createElement("div");

    element.className = "history-money";

    element.textContent = formatMoney(amount);

    return element;

}
