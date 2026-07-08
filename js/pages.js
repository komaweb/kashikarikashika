import { showPage } from "./ui/navigation.js";

import { updateBalance } from "./ui/balance.js";
import { renderHistory } from "./ui/historyView.js";
import { initializeButtons } from "./ui/buttons.js";
import { initializeSettingsView } from "./ui/settingsView.js";

export async function openMoneyPage(){

    await showPage(

        "money",

        initializeMoneyPage

    );

}

export async function openHistoryPage(){

    await showPage(

        "history",

        initializeHistoryPage

    );

}

export async function openSettingsPage(){

    await showPage(

        "settings",

        initializeSettingsPage

    );

}

function initializeMoneyPage(){

    refreshMoneyPage();

    initializeButtons(

        refreshMoneyPage

    );

    initializeMoneyNavigation();

}

function initializeHistoryPage(){

    refreshHistoryPage();

    initializeHistoryNavigation();

}

function initializeSettingsPage(){

    initializeSettingsView(

        refreshMoneyPage

    );

    initializeSettingsNavigation();

}

function refreshMoneyPage(){

    updateBalance();

    renderHistory({

        target:

            document.getElementById(

                "historyList"

            ),

        filter:"active",

        limit:5,

        refresh:refreshMoneyPage

    });

}

function refreshHistoryPage(){

    renderHistory({

        target:

            document.getElementById(

                "historyList"

            ),

        filter:"active",

        refresh:refreshHistoryPage

    });

}

function initializeMoneyNavigation(){

    bindNavigation({

        history:true,

        settings:true

    });

}

function initializeHistoryNavigation(){

    bindNavigation({

        money:true,

        settings:true

    });

}

function initializeSettingsNavigation(){

    bindNavigation({

        money:true,

        history:true

    });

}

function bindNavigation({

    money=false,

    history=false,

    settings=false

}){

    if(money){

        const button = document.getElementById(

            "moneyTab"

        );

        if(button){

            button.addEventListener(

                "click",

                openMoneyPage

            );

        }

    }

    if(history){

        const button = document.getElementById(

            "historyTab"

        );

        if(button){

            button.addEventListener(

                "click",

                openHistoryPage

            );

        }

    }

    if(settings){

        const button = document.getElementById(

            "settingsTab"

        );

        if(button){

            button.addEventListener(

                "click",

                openSettingsPage

            );

        }

    }

}
