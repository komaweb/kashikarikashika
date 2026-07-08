import {

    openMoneyPage,
    openHistoryPage,
    openSettingsPage

} from "../pages.js";

export function initializeNavigation(currentPage){

    bind(

        "moneyTab",

        currentPage !== "money",

        openMoneyPage

    );

    bind(

        "historyTab",

        currentPage !== "history",

        openHistoryPage

    );

    bind(

        "settingsTab",

        currentPage !== "settings",

        openSettingsPage

    );

}

function bind(

    id,

    enabled,

    callback

){

    if(!enabled){

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
