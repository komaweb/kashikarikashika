export function createPersonView(person){

    const element = document.createElement("div");

    element.className = "person-view";

    if(person.image){

        const image = document.createElement("img");

        image.className = "person-icon";

        image.src = person.image;

        image.alt = person.name;

        element.appendChild(image);

    }else{

        const icon = document.createElement("div");

        icon.className = "person-icon person-placeholder";

        icon.style.background = person.color;

        element.appendChild(icon);

    }

    const name = document.createElement("span");

    name.className = "person-name";

    name.textContent = person.name;

    element.appendChild(name);

    return element;

}
