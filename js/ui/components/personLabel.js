export function createPersonLabel(person){

    const element = document.createElement("div");

    element.className = "history-detail";

    const icon = document.createElement("div");

    if(person.image){

        const image = document.createElement("img");

        image.className =

            "history-person-icon";

        image.src = person.image;

        image.alt = person.name;

        icon.appendChild(image);

    }else{

        icon.className =

            "history-person-placeholder";

        icon.style.backgroundColor =

            person.color;

    }

    element.appendChild(icon);

    const text = document.createElement("span");

    text.className =

        "history-person-text";

    text.textContent =

        `${person.name}が支払いました`;

    element.appendChild(text);

    return element;

}
