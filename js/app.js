import { loadPage } from "./ui/navigation.js";

import { updateBalance } from "./ui/balance.js";
import { renderHistory } from "./ui/historyView.js";
import { initializeButtons } from "./ui/buttons.js";

async function initializeMoneyPage(){

    await loadPage("money");

    refresh();

    initializeButtons(refresh);

}

function refresh(){

    updateBalance();

    renderHistory(refresh);

}

document.addEventListener("DOMContentLoaded",()=>{

    initializeMoneyPage();

});
