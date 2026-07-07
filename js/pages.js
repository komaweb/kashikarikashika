import { showPage } from "./ui/navigation.js";

import { updateBalance } from "./ui/balance.js";
import { renderHistory } from "./ui/historyView.js";
import { initializeButtons } from "./ui/buttons.js";
import { initializeSettingsView } from "./ui/settingsView.js";

export async function openMoneyPage(){

    await showPage(

        "money",

        ()=>{

            refreshMoneyPage();

            initializeButtons(

                refreshMoneyPage

            );

            initializeMoneyNavigation();

        }

    );

}

export async function openSettingsPage(){

    await showPage(

        "settings",

        ()=>{

            initializeSettingsView(

                refreshMoneyPage

            );

            initializeSettingsNavigation();

        }

    );

}

function refreshMoneyPage(){

    updateBalance();

    renderHistory(

        refreshMoneyPage

    );

}

function initializeMoneyNavigation(){

    const settingsTab =

        document.getElementById(

            "settingsTab"

        );

    settingsTab.addEventListener(

        "click",

        openSettingsPage

    );

}

function initializeSettingsNavigation(){

    const moneyTab =

        document.getElementById(

            "moneyTab"

        );

    moneyTab.addEventListener(

        "click",

        openMoneyPage

    );

}
