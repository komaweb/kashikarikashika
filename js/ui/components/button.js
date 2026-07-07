export function createButton({

    text = "",

    classes = [],

    onClick = null,

    type = "button"

}){

    const button = document.createElement("button");

    button.type = type;

    button.classList.add("button");

    classes.forEach(className=>{

        button.classList.add(className);

    });

    button.textContent = text;

    if(onClick){

        button.addEventListener("click", onClick);

    }

    return button;

}
