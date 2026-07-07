import { formatDate } from "../format.js";

export function createHistoryDate(date){

    const element = document.createElement("div");

    element.className = "history-date";

    element.textContent = formatDate(date);

    return element;

}
