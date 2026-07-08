export function createPersonView(

    person,

    {

        layout="row",

        size="medium"

    }={}

){

    const element = document.createElement("div");

    element.classList.add(

        "person-view",

        `person-${layout}`,

        `person-${size}`

    );

    if(person.image){

        const image = document.createElement("img");

        image.className = "person-icon";

        image.src = person.image;

        image.alt = person.name;

        element.appendChild(image);

    }else{

        const icon = document.createElement("div");

        icon.className = "person-icon person-placeholder";

        icon.style.backgroundColor = person.color;

        element.appendChild(icon);

    }

    const name = document.createElement("span");

    name.className = "person-name";

    name.textContent = person.name;

    element.appendChild(name);

    return element;

}
