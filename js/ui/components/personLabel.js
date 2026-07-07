export function createPersonLabel(person){

    const element = document.createElement("div");

    element.className = "history-detail";

    element.textContent =
        `${person.icon} ${person.name}が支払いました`;

    return element;

}
