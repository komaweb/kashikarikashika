import { showPage } from "./ui/navigation.js";

import { initializePage } from "./ui/pageInitializer.js";

import { updateBalance } from "./ui/balance.js";
import { renderHistory } from "./ui/historyView.js";
import { initializeButtons } from "./ui/buttons.js";
import { initializeSettingsView } from "./ui/settingsView.js";
import { initializeHistoryView } from "./ui/historyPage.js";

export async function openMoneyPage(){

    await showPage(

        "money",

        ()=>{

            initializePage({

                onInitialize:initializeMoney,

                navigation:{

                    history:openHistoryPage,

                    settings:openSettingsPage

                }

            });

        }

    );

}

export async function openHistoryPage(){

    await showPage(

        "history",

        ()=>{

            initializePage({

                onInitialize:initializeHistoryView,

                navigation:{

                    money:openMoneyPage,

                    settings:openSettingsPage

                }

            });

        }

    );

}

export async function openSettingsPage(){

    await showPage(

        "settings",

        ()=>{

            initializePage({

                onInitialize:initializeSettings,

                navigation:{

                    money:openMoneyPage,

                    history:openHistoryPage

                }

            });

        }

    );

}

function initializeMoney(){

    refreshMoneyPage();

    initializeButtons(

        refreshMoneyPage

    );

}

function initializeSettings(){

    initializeSettingsView(

        refreshMoneyPage

    );

}

export function refreshMoneyPage(){

    updateBalance();

    renderHistory({

        filter:"recent",

        limit:5,

        refresh:refreshMoneyPage

    });

}
