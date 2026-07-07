export function createCard(...classNames){

    const card = document.createElement("div");

    card.classList.add("card");

    classNames.forEach(className=>{

        if(className){

            card.classList.add(className);

        }

    });

    return card;

}
