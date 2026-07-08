import { initializeNavigation } from "./ui/pageNavigation.js";
import { showPage } from "./ui/navigation.js";

import { updateBalance } from "./ui/balance.js";
import { renderHistory } from "./ui/historyView.js";
import { initializeButtons } from "./ui/buttons.js";
import { initializeSettingsView } from "./ui/settingsView.js";
import { initializeHistoryView } from "./ui/historyPage.js";

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

    initializeNavigation({

        history:openHistoryPage,

        settings:openSettingsPage

    });

}

function initializeHistoryPage(){

    initializeHistoryView();

    initializeNavigation({

        money:openMoneyPage,

        settings:openSettingsPage

    });

}

function initializeSettingsPage(){

    initializeSettingsView(

        refreshMoneyPage

    );

    initializeNavigation({

        money:openMoneyPage,

        history:openHistoryPage

    });

}

export function refreshMoneyPage(){

    updateBalance();

    renderHistory({

        filter:"recent",

        limit:5,

        refresh:refreshMoneyPage

    });

}
