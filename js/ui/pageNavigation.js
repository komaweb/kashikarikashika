export function initializeNavigation({

    money = null,

    history = null,

    settings = null

}){

    bind(

        "moneyTab",

        money

    );

    bind(

        "historyTab",

        history

    );

    bind(

        "settingsTab",

        settings

    );

}

function bind(

    id,

    callback

){

    if(!callback){

        return;

    }

    const button = document.getElementById(id);

    if(!button){

        return;

    }

    button.addEventListener(

        "click",

        callback

    );

}
