export function createText({

    tag = "div",

    text = "",

    classes = []

}){

    const element = document.createElement(tag);

    classes.forEach(className=>{

        element.classList.add(className);

    });

    element.textContent = text;

    return element;

}
