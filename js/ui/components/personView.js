export function createPersonView(

    person,

    {

        size="medium",

        layout="column"

    }={}

){

    const wrapper = document.createElement("div");

    wrapper.className =

        `person-view person-${layout} person-${size}`;

    let icon;

    if(person.image){

        icon = document.createElement("img");

        icon.src = person.image;

        icon.alt = person.name;

        icon.className = "person-icon";

    }else{

        icon = document.createElement("div");

        icon.className =

            "person-placeholder";

    }

    const name = document.createElement("div");

    name.className = "person-name";

    name.textContent = person.name;

    wrapper.append(

        icon,

        name

    );

    return wrapper;

}
