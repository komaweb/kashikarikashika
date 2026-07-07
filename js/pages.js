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

        }

    );

}

function refreshMoneyPage(){

    updateBalance();

    renderHistory(

        refreshMoneyPage

    );

}
